// Presentation Application Logic - Clean & Simple
// Basic navigation and keyboard controls

class PresentationApp {
    constructor() {
        // Validate slides data
        if (typeof slides === 'undefined' || !Array.isArray(slides) || slides.length === 0) {
            this.handleError('Slides data not found or empty');
            return;
        }
        
        this.currentSlide = 0;
        this.totalSlides = slides.length;
        
        // DOM element references
        this.slideContainer = document.getElementById('slideContainer');
        this.currentSlideEl = document.getElementById('slideNumber');
        this.totalSlidesEl = document.getElementById('totalSlides');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.progressBar = document.getElementById('progressBar');
        this.progressPercent = document.getElementById('progressPercent');
        
        // Initialize if all elements found
        if (this.slideContainer) {
            this.init();
        }
    }
    
    handleError(message) {
        console.error('PresentationApp Error:', message);
        const container = document.getElementById('slideContainer');
        if (container) {
            container.innerHTML = `
                <div class="flex items-center justify-center min-h-[500px]">
                    <div class="text-center">
                        <i class="fas fa-exclamation-triangle text-red-500 text-5xl mb-4"></i>
                        <h3 class="text-xl font-bold text-gray-800 mb-2">Error Loading Presentation</h3>
                        <p class="text-gray-600">${message}</p>
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

    showSlide(index) {
        // Validate index
        if (index < 0 || index >= this.totalSlides) return;
        
        this.currentSlide = index;
        
        // Update slide content with animation
        if (this.slideContainer) {
            this.slideContainer.classList.remove('slide-enter');
            void this.slideContainer.offsetWidth; // Trigger reflow
            this.slideContainer.innerHTML = this.generateSlideHTML(slides[index]);
            this.slideContainer.classList.add('slide-enter');
        }
        
        // Update UI
        this.updateUI();
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

    goToSlide(index) {
        this.showSlide(index);
    }
}
