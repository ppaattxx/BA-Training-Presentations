/**
 * Presentation Application Logic - Enhanced with Debugging
 * Handles slide navigation, keyboard controls, and fullscreen functionality
 * 
 * @class PresentationApp
 * @version 2.0.0
 * 
 * Features:
 * - Robust error handling
 * - Performance monitoring
 * - Debug mode support
 * - Comprehensive validation
 * - Touch/keyboard/mouse navigation
 */

class PresentationApp {
    constructor() {
        // Access shared utilities if available
        this.utils = window.BAUtils || this.createFallbackUtils();
        this.logger = this.utils.Logger;
        this.perf = this.utils.PerformanceTracker;
        
        // Start performance tracking
        this.perf.start('app-initialization');
        
        // Validate slides data
        if (typeof slides === 'undefined' || !Array.isArray(slides) || slides.length === 0) {
            this.handleError('Slides data not found or empty', 'SLIDES_MISSING');
            return;
        }
        
        this.logger.info('Initializing presentation with ' + slides.length + ' slides');
        
        this.currentSlide = 0;
        this.totalSlides = slides.length;
        this.navigationHistory = []; // Track navigation for debugging
        
        // DOM element references with validation
        this.slideContainer = this.utils.validateElement('#slideContainer', 'Slide Container');
        this.currentSlideEl = document.getElementById('slideNumber');
        this.totalSlidesEl = document.getElementById('totalSlides');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.progressBar = document.getElementById('progressBar');
        this.progressPercent = document.getElementById('progressPercent');
        
        // Initialize if all elements found
        if (this.slideContainer) {
            this.init();
            this.perf.end('app-initialization');
            this.logger.success('Presentation initialized successfully');
        } else {
            this.handleError('Required DOM elements not found', 'DOM_MISSING');
        }
    }
    
    /**
     * Create fallback utilities if shared utils not available
     * @returns {Object} Fallback utility functions
     */
    createFallbackUtils() {
        return {
            Logger: {
                error: (msg, data) => console.error('❌', msg, data || ''),
                warn: (msg, data) => console.warn('⚠️', msg, data || ''),
                info: (msg, data) => console.log('ℹ️', msg, data || ''),
                debug: (msg, data) => console.log('🔍', msg, data || ''),
                success: (msg, data) => console.log('✅', msg, data || '')
            },
            PerformanceTracker: {
                start: () => {},
                end: () => 0
            },
            validateElement: (selector) => document.querySelector(selector),
            validateData: (data) => !!data
        };
    }
    
    /**
     * Display error message to user with enhanced logging
     * @param {string} message - Error message to display
     * @param {string} code - Error code for debugging
     */
    handleError(message, code = 'UNKNOWN') {
        this.logger.error(`[${code}] ${message}`);
        
        // Create detailed error for debugging
        const error = new Error(message);
        error.code = code;
        error.timestamp = new Date().toISOString();
        error.slideContext = this.currentSlide;
        
        // Log stack trace in dev mode
        if (this.utils.APP_CONFIG?.DEV_MODE) {
            console.trace('Error Stack:');
            console.log('Error Details:', error);
        }
        
        const container = document.getElementById('slideContainer');
        if (container) {
            container.innerHTML = `
                <div class="flex items-center justify-center min-h-[500px]">
                    <div class="text-center">
                        <i class="fas fa-exclamation-triangle text-red-500 text-5xl mb-4"></i>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Error Loading Presentation</h3>
                        <p class="text-gray-600">${message}</p>
                        ${this.utils.APP_CONFIG?.DEV_MODE ? `<p class="text-xs text-gray-500 mt-2">Code: ${code}</p>` : ''}
                    </div>
                </div>
            `;
        }
    }

    init() {
        // Set total slides
        if (this.totalSlidesEl) {
            this.totalSlidesEl.textContent = this.totalSlides;
        }
        
        // Show first slide
        this.showSlide(0);
        
        // Event listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.previousSlide());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        
        // Touch swipe support
        this.addSwipeSupport();
    }

    /**
     * Display a specific slide with validation and performance tracking
     * @param {number} index - Zero-based index of the slide to display
     */
    showSlide(index) {
        this.perf.start('showSlide');
        
        // Validate index
        if (index < 0 || index >= this.totalSlides) {
            this.logger.warn(`Invalid slide index: ${index} (valid range: 0-${this.totalSlides - 1})`);
            return;
        }
        
        // Validate slide data
        const slide = slides[index];
        if (!slide) {
            this.handleError(`Slide ${index} data not found`, 'SLIDE_DATA_MISSING');
            return;
        }
        
        // Track navigation history
        this.navigationHistory.push({
            from: this.currentSlide,
            to: index,
            timestamp: Date.now()
        });
        
        // Keep history manageable
        if (this.navigationHistory.length > 50) {
            this.navigationHistory.shift();
        }
        
        const previousSlide = this.currentSlide;
        this.currentSlide = index;
        
        // Log navigation in dev mode
        if (this.utils.DebugInfo) {
            this.utils.DebugInfo.logNavigation('showSlide', previousSlide, index);
            this.utils.DebugInfo.logSlideRender(index, slide);
        }
        
        // Update slide content with animation
        if (this.slideContainer) {
            try {
                this.slideContainer.classList.remove('slide-enter');
                void this.slideContainer.offsetWidth; // Trigger reflow
                this.slideContainer.innerHTML = this.generateSlideHTML(slide);
                this.slideContainer.classList.add('slide-enter');
                this.logger.debug(`Rendered slide ${index}: ${slide.title}`);
            } catch (error) {
                this.handleError(`Failed to render slide ${index}: ${error.message}`, 'RENDER_ERROR');
            }
        }
        
        // Update UI
        this.updateUI();
        this.perf.end('showSlide');
    }

    generateSlideHTML(slide) {
        const subtitle = slide.subtitle || '';
        const displaySubtitle = subtitle ? `<p class="text-lg md:text-xl text-gray-600">${subtitle}</p>` : '';
        
        return `
            <div class="slide-content">
                <div class="mb-8">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-3">${slide.title}</h2>
                    ${displaySubtitle}
                </div>
                <div class="slide-body">
                    ${slide.content}
                </div>
            </div>
        `;
    }

    updateUI() {
        // Update slide counter
        if (this.currentSlideEl) {
            this.currentSlideEl.textContent = this.currentSlide + 1;
        }
        
        // Update fullscreen counter if in fullscreen mode
        if (isFullscreen) {
            const fsSlideNum = document.getElementById('fsSlideNumber');
            if (fsSlideNum) {
                fsSlideNum.textContent = this.currentSlide + 1;
            }
        }
        
        // Update progress bar and percentage
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        if (this.progressBar) {
            this.progressBar.style.width = `${progress}%`;
        }
        if (this.progressPercent) {
            this.progressPercent.textContent = `${Math.round(progress)}%`;
        }
        
        // Update button states
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentSlide === 0;
        }
        
        // Update button text for last slide
        if (this.nextBtn) {
            if (this.currentSlide === this.totalSlides - 1) {
                this.nextBtn.innerHTML = '<span class="hidden sm:inline">Finish</span> <i class="fas fa-flag-checkered"></i>';
            } else {
                this.nextBtn.innerHTML = '<span class="hidden sm:inline">Next</span> <i class="fas fa-chevron-right"></i>';
            }
        }
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.showSlide(this.currentSlide + 1);
        }
    }

    previousSlide() {
        if (this.currentSlide > 0) {
            this.showSlide(this.currentSlide - 1);
        }
    }

    handleKeyboard(e) {
        // Don't interfere with input fields
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        switch(e.key) {
            case 'ArrowRight':
            case ' ':
                e.preventDefault();
                this.nextSlide();
                break;
            case 'ArrowLeft':
            case 'Backspace':
                e.preventDefault();
                this.previousSlide();
                break;
            case 'Home':
                e.preventDefault();
                this.showSlide(0);
                break;
            case 'End':
                e.preventDefault();
                this.showSlide(this.totalSlides - 1);
                break;
            case '?':
                e.preventDefault();
                document.getElementById('keyboardHint')?.classList.toggle('show');
                setTimeout(() => {
                    document.getElementById('keyboardHint')?.classList.remove('show');
                }, 5000);
                break;
        }
    }

    addSwipeSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        if (this.slideContainer) {
            this.slideContainer.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });
            
            this.slideContainer.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                this.handleSwipe();
            });
        }
        
        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next slide
                    this.nextSlide();
                } else {
                    // Swipe right - previous slide
                    this.previousSlide();
                }
            }
        };
        
        this.handleSwipe = handleSwipe;
    }

    /**
     * Navigate to a specific slide by index
     * @param {number} index - Zero-based index of the slide
     */
    goToSlide(index) {
        this.showSlide(index);
    }
    
    /**
     * Get current application state for debugging
     * @returns {Object} Current state object
     */
    getState() {
        return {
            currentSlide: this.currentSlide,
            totalSlides: this.totalSlides,
            navigationHistory: this.navigationHistory.slice(-10), // Last 10 navigations
            slidesLoaded: typeof slides !== 'undefined' && slides.length > 0,
            elementsFound: {
                slideContainer: !!this.slideContainer,
                prevBtn: !!this.prevBtn,
                nextBtn: !!this.nextBtn,
                progressBar: !!this.progressBar
            }
        };
    }
    
    /**
     * Display debug information panel
     */
    showDebugInfo() {
        const state = this.getState();
        console.group('🔍 Presentation Debug Info');
        console.log('State:', state);
        console.log('Recent Navigation:', this.navigationHistory.slice(-5));
        console.log('Current Slide Data:', slides[this.currentSlide]);
        console.groupEnd();
        
        this.logger.info('Debug panel displayed - check console');
    }
    
    /**
     * Validate all slides for common issues
     * @returns {Object} Validation report
     */
    validateAllSlides() {
        const errors = [];
        const warnings = [];
        
        slides.forEach((slide, index) => {
            if (!slide.title) {
                errors.push({ index, issue: 'Missing title' });
            }
            if (!slide.content) {
                errors.push({ index, issue: 'Missing content' });
            }
            if (slide.content && slide.content.length < 50) {
                warnings.push({ index, issue: 'Very short content', length: slide.content.length });
            }
        });
        
        const report = {
            totalSlides: slides.length,
            errors,
            warnings,
            valid: errors.length === 0
        };
        
        this.logger.info('Slide Validation Report:', report);
        return report;
    }
}

/**
 * Enhanced Fullscreen functionality
 * Manages fullscreen mode with browser API support
 */
let isFullscreen = false;

/**
 * Toggle fullscreen mode on/off
 */
function toggleFullscreen() {
    const slideContainer = document.getElementById('slideContainer');
    const fullscreenControls = document.getElementById('fullscreenControls');
    const fullscreenBackdrop = document.getElementById('fullscreenBackdrop');
    const header = document.querySelector('header');
    const progressSection = document.querySelector('.mb-6.no-print');
    const navigation = document.querySelector('nav');
    
    if (!isFullscreen) {
        // Enter fullscreen mode
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        
        isFullscreen = true;
        
        // Hide header, progress bar, and navigation
        if (header) header.style.display = 'none';
        if (progressSection) progressSection.style.display = 'none';
        if (navigation) navigation.style.display = 'none';
        
        // Activate fullscreen backdrop
        if (fullscreenBackdrop) {
            fullscreenBackdrop.classList.add('active');
        }
        
        // Style slide container for fullscreen
        if (slideContainer) {
            slideContainer.classList.add('fullscreen-mode');
            slideContainer.style.maxHeight = 'calc(100vh - 6rem)';
        }
        
        // Show and activate fullscreen controls
        if (fullscreenControls) {
            fullscreenControls.style.display = 'flex';
            fullscreenControls.classList.add('active');
        }
        
        // Update total slides in fullscreen counter
        const fsTotalSlides = document.getElementById('fsTotalSlides');
        const fsSlideNumber = document.getElementById('fsSlideNumber');
        if (fsTotalSlides && window.presentation) {
            fsTotalSlides.textContent = window.presentation.totalSlides;
        }
        if (fsSlideNumber && window.presentation) {
            fsSlideNumber.textContent = window.presentation.currentSlide + 1;
        }
    } else {
        // Exit fullscreen mode
        exitFullscreenMode();
    }
}

/**
 * Exit fullscreen mode and restore normal layout
 */
function exitFullscreenMode() {
    const slideContainer = document.getElementById('slideContainer');
    const fullscreenControls = document.getElementById('fullscreenControls');
    const fullscreenBackdrop = document.getElementById('fullscreenBackdrop');
    const header = document.querySelector('header');
    const progressSection = document.querySelector('.mb-6.no-print');
    const navigation = document.querySelector('nav');
    
    // Exit browser fullscreen
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    
    isFullscreen = false;
    
    // Restore normal layout
    if (header) header.style.display = '';
    if (progressSection) progressSection.style.display = '';
    if (navigation) navigation.style.display = '';
    
    // Deactivate backdrop
    if (fullscreenBackdrop) {
        fullscreenBackdrop.classList.remove('active');
    }
    
    // Remove fullscreen styling from slide container
    if (slideContainer) {
        slideContainer.classList.remove('fullscreen-mode');
        slideContainer.style.maxHeight = '80vh';
    }
    
    // Hide fullscreen controls
    if (fullscreenControls) {
        fullscreenControls.style.display = 'none';
        fullscreenControls.classList.remove('active');
    }
}

// Listen for fullscreen changes (when user exits via ESC or browser controls)
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && isFullscreen) {
        exitFullscreenMode();
    }
});

// Also listen for webkit and ms prefixed events
document.addEventListener('webkitfullscreenchange', () => {
    if (!document.webkitFullscreenElement && isFullscreen) {
        exitFullscreenMode();
    }
});

document.addEventListener('msfullscreenchange', () => {
    if (!document.msFullscreenElement && isFullscreen) {
        exitFullscreenMode();
    }
});

// Handle F key for fullscreen toggle
document.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
    }
});

// ============================================================================
// INITIALIZATION & DEBUG API
// ============================================================================

/**
 * Initialize presentation when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    // Create and expose presentation instance globally
    window.presentation = new PresentationApp();
    
    // Expose debug API if BAUtils available
    if (window.BAUtils && window.presentation) {
        window.PresentationDebug = {
            /** Get current state */
            state: () => window.presentation.getState(),
            
            /** Show debug panel */
            info: () => window.presentation.showDebugInfo(),
            
            /** Validate all slides */
            validate: () => window.presentation.validateAllSlides(),
            
            /** Go to specific slide */
            goTo: (index) => window.presentation.goToSlide(index),
            
            /** Get navigation history */
            history: () => window.presentation.navigationHistory,
            
            /** Enable dev mode */
            enableDevMode: () => {
                window.BAUtils.APP_CONFIG.DEV_MODE = true;
                window.BAUtils.APP_CONFIG.LOG_LEVEL = 'debug';
                console.log('✅ Dev mode enabled');
            },
            
            /** Disable dev mode */
            disableDevMode: () => {
                window.BAUtils.APP_CONFIG.DEV_MODE = false;
                window.BAUtils.APP_CONFIG.LOG_LEVEL = 'info';
                console.log('✅ Dev mode disabled');
            }
        };
        
        console.log('💡 Tip: Use PresentationDebug for debugging. Try: PresentationDebug.info()');
    }
});
