/**
 * Kings Highway Technologies LLC
 * Institutional Website JavaScript
 * Royal, restrained, and ceremonial interactions
 */

(function() {
    'use strict';

    // ==============================================
    // SMOOTH SCROLLING FOR NAVIGATION
    // ==============================================
    
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ==============================================
    // NAVBAR BEHAVIOR - GLASS EFFECT
    // ==============================================
    
    function initNavbarBehavior() {
        const navbar = document.getElementById('navbar');
        let scrollTimeout;
        
        function handleNavbarScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Enhanced glass effect based on scroll
            if (scrollTop > 100) {
                navbar.style.background = 'rgba(26, 3, 35, 0.92)';
                navbar.style.backdropFilter = 'blur(25px) saturate(200%)';
                navbar.style.borderBottomColor = 'rgba(198, 116, 20, 0.3)';
                navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
            } else {
                navbar.style.background = 'rgba(26, 3, 35, 0.85)';
                navbar.style.backdropFilter = 'blur(20px) saturate(180%)';
                navbar.style.borderBottomColor = 'rgba(198, 116, 20, 0.15)';
                navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            }
        }
        
        window.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(handleNavbarScroll, 16); // ~60fps
        });
    }

    // ==============================================
    // SUBTLE REVEAL ANIMATIONS
    // ==============================================
    
    function initRevealAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Add staggered delay for grouped elements
                    const children = entry.target.querySelectorAll('.brand-item, .principle-item');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.style.opacity = '1';
                            child.style.transform = 'translateY(0)';
                        }, index * 150);
                    });
                }
            });
        }, observerOptions);
        
        // Observe all sections and animatable elements
        const sections = document.querySelectorAll('.section');
        const animatableElements = document.querySelectorAll('.brand-item, .principle-item');
        const heroMovedElements = document.querySelectorAll('.hero-title-moved, .hero-subtitle-moved');
        
    }



    // ==============================================
    // SUBTLE GRADIENT MOTION
    // ==============================================
    
    function initGradientMotion() {
        const sections = document.querySelectorAll('.section:nth-child(even)');
        let animationId;
        let time = 0;
        
        function animateGradients() {
            time += 0.002; // Very slow progression
            const intensity = Math.sin(time) * 0.1 + 0.9; // Subtle variation
            
            sections.forEach((section, index) => {
                const offset = time + (index * 0.5);
                const hueShift = Math.sin(offset) * 5;
                
                section.style.background = `
                    linear-gradient(135deg, 
                    rgba(46, 6, 80, ${intensity}) 0%, 
                    rgba(26, 3, 35, ${intensity * 0.8}) 50%, 
                    rgba(46, 6, 80, ${intensity}) 100%)
                `;
            });
            
            animationId = requestAnimationFrame(animateGradients);
        }
        
        // Only animate on desktop for performance
        if (window.innerWidth > 768) {
            animationId = requestAnimationFrame(animateGradients);
        }
        
        // Pause animation when tab is not visible
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                if (animationId) {
                    cancelAnimationFrame(animationId);
                }
            } else {
                if (window.innerWidth > 768) {
                    animationId = requestAnimationFrame(animateGradients);
                }
            }
        });
    }

    // ==============================================
    // ENHANCED HOVER EFFECTS
    // ==============================================
    
    function initEnhancedHoverEffects() {
        // Brand items with refined interactions
        const brandItems = document.querySelectorAll('.brand-item');
        
        brandItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 8px 25px rgba(243, 203, 65, 0.1)';
                
                // Enhance icon opacity
                const icon = this.querySelector('.brand-icon');
                if (icon) {
                    icon.style.opacity = '1';
                    icon.style.transform = 'scale(1.05)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
                
                const icon = this.querySelector('.brand-icon');
                if (icon) {
                    icon.style.opacity = '0.9';
                    icon.style.transform = 'scale(1)';
                }
            });
        });
        
        // Principle items with subtle glow
        const principleItems = document.querySelectorAll('.principle-item');
        
        principleItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 4px 15px rgba(198, 116, 20, 0.15)';
                this.style.borderColor = 'rgba(198, 116, 20, 0.4)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
                this.style.borderColor = 'rgba(198, 116, 20, 0.2)';
            });
        });
    }

    // ==============================================
    // ACCESSIBILITY ENHANCEMENTS
    // ==============================================
    
    function initAccessibilityEnhancements() {
        // Keyboard navigation for custom elements
        const focusableElements = document.querySelectorAll('.brand-item, .principle-item');
        
        focusableElements.forEach(element => {
            element.setAttribute('tabindex', '0');
            
            element.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Trigger hover effect on keyboard interaction
                    this.dispatchEvent(new Event('mouseenter'));
                }
            });
            
            element.addEventListener('keyup', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    this.dispatchEvent(new Event('mouseleave'));
                }
            });
        });
        
        // Reduce motion preferences
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const rotatingLogo = document.querySelector('.rotating-logo');
            if (rotatingLogo) {
                rotatingLogo.style.animation = 'none';
            }
        }
    }

    // ==============================================
    // PERFORMANCE OPTIMIZATION
    // ==============================================
    
    function initPerformanceOptimizations() {
        // Debounce scroll events
        let scrollTimeout;
        const originalScrollHandlers = [];
        
        function debounce(func, wait) {
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(scrollTimeout);
                    func(...args);
                };
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(later, wait);
            };
        }
        
        // Optimize scroll performance
        const optimizedScrollHandler = debounce(function() {
            // Handle scroll-dependent animations here if needed
        }, 16); // ~60fps
        
        window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    }

    // ==============================================
    // INITIALIZATION
    // ==============================================
    
    function initializeWebsite() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                initSmoothScrolling();
                initNavbarBehavior();
                initRevealAnimations();
                initGradientMotion();
                initEnhancedHoverEffects();
                initAccessibilityEnhancements();
                initPerformanceOptimizations();
            });
        } else {
            // DOM is already loaded
            initSmoothScrolling();
            initNavbarBehavior();
            initRevealAnimations();
            initGradientMotion();
            initEnhancedHoverEffects();
            initAccessibilityEnhancements();
            initPerformanceOptimizations();
        }
    }

    // Start the website
    initializeWebsite();

    // ==============================================
    // ERROR HANDLING
    // ==============================================
    
    window.addEventListener('error', function(e) {
        console.log('Institutional website error handled gracefully:', e.message);
    });

    // ==============================================
    // INSTITUTIONAL EASTER EGG
    // ==============================================
    
    // Console message for developers
    console.log(`
    ╔═══════════════════════════════════════════════════════════════╗
    ║              Kings Highway Technologies LLC                   ║
    ║                    Institutional Platform                     ║
    ║                                                               ║
    ║  Building Pathways for Innovation, Infrastructure,           ║
    ║            and Global Collaboration                          ║
    ╚═══════════════════════════════════════════════════════════════╝
    `);

})();
