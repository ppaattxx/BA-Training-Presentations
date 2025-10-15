/**
 * Shared Utilities for BA Training Presentations
 * @fileoverview Common functions, validation, and debugging tools used across all presentations
 * @version 1.0.0
 * @author BA Training Team
 */

// ============================================================================
// CONFIGURATION & CONSTANTS
// ============================================================================

/**
 * Global application configuration
 * @const {Object}
 */
const APP_CONFIG = {
    /** Development mode - enables extensive logging and validation */
    DEV_MODE: false,
    
    /** Enable performance monitoring */
    PERFORMANCE_MONITORING: false,
    
    /** Log level: 'error', 'warn', 'info', 'debug' */
    LOG_LEVEL: 'info',
    
    /** Validate slides on load */
    VALIDATE_ON_LOAD: false
};

// ============================================================================
// LOGGING UTILITIES
// ============================================================================

/**
 * Structured logger with level support
 * @namespace Logger
 */
const Logger = {
    /**
     * Log error messages
     * @param {string} message - Error message
     * @param {*} data - Additional data to log
     */
    error(message, data = null) {
        console.error(`❌ [ERROR] ${message}`, data || '');
    },
    
    /**
     * Log warning messages
     * @param {string} message - Warning message
     * @param {*} data - Additional data to log
     */
    warn(message, data = null) {
        if (['warn', 'info', 'debug'].includes(APP_CONFIG.LOG_LEVEL)) {
            console.warn(`⚠️ [WARN] ${message}`, data || '');
        }
    },
    
    /**
     * Log info messages
     * @param {string} message - Info message
     * @param {*} data - Additional data to log
     */
    info(message, data = null) {
        if (['info', 'debug'].includes(APP_CONFIG.LOG_LEVEL)) {
            console.log(`ℹ️ [INFO] ${message}`, data || '');
        }
    },
    
    /**
     * Log debug messages
     * @param {string} message - Debug message
     * @param {*} data - Additional data to log
     */
    debug(message, data = null) {
        if (APP_CONFIG.DEV_MODE && APP_CONFIG.LOG_LEVEL === 'debug') {
            console.log(`🔍 [DEBUG] ${message}`, data || '');
        }
    },
    
    /**
     * Log success messages
     * @param {string} message - Success message
     * @param {*} data - Additional data to log
     */
    success(message, data = null) {
        if (['info', 'debug'].includes(APP_CONFIG.LOG_LEVEL)) {
            console.log(`✅ [SUCCESS] ${message}`, data || '');
        }
    }
};

// ============================================================================
// ERROR HANDLING
// ============================================================================

/**
 * Custom error class for presentation errors
 */
class PresentationError extends Error {
    constructor(message, code, details = null) {
        super(message);
        this.name = 'PresentationError';
        this.code = code;
        this.details = details;
        this.timestamp = new Date().toISOString();
    }
}

/**
 * Global error handler for presentation errors
 * @param {Error} error - Error object
 * @param {string} context - Context where error occurred
 */
function handleError(error, context = 'Unknown') {
    Logger.error(`Error in ${context}:`, {
        message: error.message,
        stack: error.stack,
        code: error.code,
        details: error.details
    });
    
    if (APP_CONFIG.DEV_MODE) {
        console.trace('Error trace:');
    }
    
    // Show user-friendly error message
    showErrorNotification(error.message, context);
}

/**
 * Display error notification to user
 * @param {string} message - Error message
 * @param {string} context - Error context
 */
function showErrorNotification(message, context) {
    // Only show in browser environment
    if (typeof document !== 'undefined') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #fee;
            border: 2px solid #c00;
            color: #c00;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            z-index: 10000;
            max-width: 400px;
            font-family: system-ui, -apple-system, sans-serif;
        `;
        notification.innerHTML = `
            <strong>Error in ${context}</strong><br>
            <span style="font-size: 0.9em;">${message}</span>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => notification.remove(), 5000);
    }
}

// ============================================================================
// PERFORMANCE MONITORING
// ============================================================================

/**
 * Performance tracker for measuring operation times
 * @namespace PerformanceTracker
 */
const PerformanceTracker = {
    timers: {},
    
    /**
     * Start timing an operation
     * @param {string} label - Operation label
     */
    start(label) {
        if (APP_CONFIG.PERFORMANCE_MONITORING) {
            this.timers[label] = performance.now();
            Logger.debug(`Started: ${label}`);
        }
    },
    
    /**
     * End timing and log duration
     * @param {string} label - Operation label
     * @returns {number} Duration in milliseconds
     */
    end(label) {
        if (APP_CONFIG.PERFORMANCE_MONITORING && this.timers[label]) {
            const duration = performance.now() - this.timers[label];
            Logger.info(`⏱️ ${label}: ${duration.toFixed(2)}ms`);
            delete this.timers[label];
            return duration;
        }
        return 0;
    }
};

// ============================================================================
// VALIDATION UTILITIES
// ============================================================================

/**
 * Validates a DOM element exists
 * @param {string} selector - CSS selector
 * @param {string} elementName - Friendly name for logging
 * @returns {Element|null} The element or null
 */
function validateElement(selector, elementName = 'Element') {
    const element = document.querySelector(selector);
    if (!element) {
        Logger.error(`${elementName} not found: ${selector}`);
        return null;
    }
    Logger.debug(`${elementName} found: ${selector}`);
    return element;
}

/**
 * Validates required data exists
 * @param {*} data - Data to validate
 * @param {string} dataName - Friendly name for logging
 * @returns {boolean} True if valid
 */
function validateData(data, dataName = 'Data') {
    if (!data || (Array.isArray(data) && data.length === 0)) {
        Logger.error(`${dataName} is missing or empty`);
        return false;
    }
    Logger.debug(`${dataName} validated successfully`);
    return true;
}

/**
 * Validates slide object structure
 * @param {Object} slide - Slide object to validate
 * @param {number} index - Slide index for error reporting
 * @returns {boolean} True if valid
 */
function validateSlideStructure(slide, index) {
    const requiredFields = ['title', 'content'];
    const missingFields = requiredFields.filter(field => !slide[field]);
    
    if (missingFields.length > 0) {
        Logger.error(`Slide ${index} missing fields:`, missingFields);
        return false;
    }
    
    Logger.debug(`Slide ${index} structure validated`);
    return true;
}

// ============================================================================
// DOM UTILITIES
// ============================================================================

/**
 * Safely set text content of an element
 * @param {string} selector - CSS selector
 * @param {string} text - Text to set
 * @param {string} fallback - Fallback text if element not found
 */
function safeSetText(selector, text, fallback = '') {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text || fallback;
        Logger.debug(`Set text for ${selector}: ${text}`);
    } else {
        Logger.warn(`Element not found for text update: ${selector}`);
    }
}

/**
 * Safely set HTML content of an element
 * @param {string} selector - CSS selector
 * @param {string} html - HTML to set
 * @param {string} fallback - Fallback HTML if element not found
 */
function safeSetHTML(selector, html, fallback = '') {
    const element = document.querySelector(selector);
    if (element) {
        element.innerHTML = html || fallback;
        Logger.debug(`Set HTML for ${selector}`);
    } else {
        Logger.warn(`Element not found for HTML update: ${selector}`);
    }
}

/**
 * Add CSS class safely
 * @param {string} selector - CSS selector
 * @param {string} className - Class name to add
 */
function safeAddClass(selector, className) {
    const element = document.querySelector(selector);
    if (element) {
        element.classList.add(className);
        Logger.debug(`Added class ${className} to ${selector}`);
    } else {
        Logger.warn(`Element not found for class addition: ${selector}`);
    }
}

/**
 * Remove CSS class safely
 * @param {string} selector - CSS selector
 * @param {string} className - Class name to remove
 */
function safeRemoveClass(selector, className) {
    const element = document.querySelector(selector);
    if (element) {
        element.classList.remove(className);
        Logger.debug(`Removed class ${className} from ${selector}`);
    } else {
        Logger.warn(`Element not found for class removal: ${selector}`);
    }
}

// ============================================================================
// DEBUGGING UTILITIES
// ============================================================================

/**
 * Debug information display
 * @namespace DebugInfo
 */
const DebugInfo = {
    /**
     * Show debug panel with app state
     * @param {Object} state - Current application state
     */
    show(state) {
        if (!APP_CONFIG.DEV_MODE) return;
        
        console.group('🔍 Debug Information');
        console.log('Current State:', state);
        console.log('Configuration:', APP_CONFIG);
        console.log('Timers:', PerformanceTracker.timers);
        console.groupEnd();
    },
    
    /**
     * Log navigation event
     * @param {string} action - Navigation action
     * @param {number} from - Previous index
     * @param {number} to - New index
     */
    logNavigation(action, from, to) {
        if (APP_CONFIG.DEV_MODE) {
            Logger.debug(`Navigation: ${action} (${from} → ${to})`);
        }
    },
    
    /**
     * Log slide render event
     * @param {number} index - Slide index
     * @param {Object} slide - Slide data
     */
    logSlideRender(index, slide) {
        if (APP_CONFIG.DEV_MODE) {
            Logger.debug(`Rendering slide ${index}:`, {
                title: slide.title,
                type: slide.type,
                contentLength: slide.content?.length
            });
        }
    }
};

// ============================================================================
// BROWSER COMPATIBILITY
// ============================================================================

/**
 * Check for required browser features
 * @returns {Object} Compatibility report
 */
function checkBrowserCompatibility() {
    const features = {
        localStorage: typeof localStorage !== 'undefined',
        fullscreen: document.fullscreenEnabled || document.webkitFullscreenEnabled,
        es6: typeof Promise !== 'undefined' && typeof Map !== 'undefined',
        customElements: 'customElements' in window
    };
    
    const compatible = Object.values(features).every(supported => supported);
    
    if (!compatible) {
        Logger.warn('Browser compatibility issues detected:', features);
    } else {
        Logger.success('Browser fully compatible');
    }
    
    return { compatible, features };
}

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize utilities and check environment
 */
function initializeUtils() {
    if (APP_CONFIG.DEV_MODE) {
        Logger.info('🚀 BA Presentation Utils Initialized (DEV MODE)');
        Logger.info('Available utilities: Logger, PerformanceTracker, DebugInfo');
        
        // Check browser compatibility
        const compat = checkBrowserCompatibility();
        if (!compat.compatible) {
            Logger.warn('Some features may not work in this browser');
        }
    }
}

// Auto-initialize if in browser
if (typeof window !== 'undefined') {
    // Make utilities globally available
    window.BAUtils = {
        Logger,
        PerformanceTracker,
        DebugInfo,
        handleError,
        PresentationError,
        validateElement,
        validateData,
        validateSlideStructure,
        safeSetText,
        safeSetHTML,
        safeAddClass,
        safeRemoveClass,
        checkBrowserCompatibility,
        APP_CONFIG
    };
    
    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeUtils);
    } else {
        initializeUtils();
    }
    
    Logger.info('💡 BAUtils available globally. Try: BAUtils.Logger.info("test")');
}

// ============================================================================
// EXPORTS (for module systems)
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        APP_CONFIG,
        Logger,
        PerformanceTracker,
        DebugInfo,
        PresentationError,
        handleError,
        validateElement,
        validateData,
        validateSlideStructure,
        safeSetText,
        safeSetHTML,
        safeAddClass,
        safeRemoveClass,
        checkBrowserCompatibility,
        initializeUtils
    };
}
