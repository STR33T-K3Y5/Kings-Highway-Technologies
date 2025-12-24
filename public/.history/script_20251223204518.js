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
    // NAVBAR BEHAVIOR
    // ==============================================
    
    function initNavbarBehavior() {
        const navbar = document.getElementById('navbar');
        let lastScrollTop = 0;
        let scrollTimeout;
        
        function handleNavbarScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add/remove background opacity based on scroll
            if (scrollTop > 100) {
                navbar.style.background = 'rgba(26, 3, 35, 0.98)';
                navbar.style.borderBottomColor = 'rgba(198, 116, 20, 0.4)';
            } else {
                navbar.style.background = 'rgba(26, 3, 35, 0.95)';
                navbar.style.borderBottomColor = 'rgba(198, 116, 20, 0.2)';
            }
            
            lastScrollTop = scrollTop;
        }
        
        window.addEventListener('scroll', function() {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(handleNavbarScroll, 10);
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
        
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            revealObserver.observe(section);
        });
        
        animatableElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            revealObserver.observe(element);
        });
    }

    // ==============================================
    // CEREMONIAL LOGO INTERACTIONS
    // ==============================================
    
    function initLogoInteractions() {
        const rotatingLogo = document.querySelector('.rotating-logo');
        const heroTitle = document.querySelector('.hero-title');
        
        if (rotatingLogo) {
            let isHovered = false;
            
            rotatingLogo.addEventListener('mouseenter', function() {
                if (!isHovered) {
                    isHovered = true;
                    this.style.animationDuration = '10s'; // Faster on hover but still ceremonial
                    this.style.filter = 'drop-shadow(0 6px 12px rgba(243, 203, 65, 0.5))';
                    this.style.opacity = '1';
                    
                    // Subtle title emphasis
                    if (heroTitle) {
                        heroTitle.style.color = '#f3cb41';
                        heroTitle.style.textShadow = '0 0 20px rgba(243, 203, 65, 0.3)';
                    }
                }
            });
            
            rotatingLogo.addEventListener('mouseleave', function() {
                isHovered = false;
                this.style.animationDuration = '20s'; // Back to ceremonial speed
                this.style.filter = 'drop-shadow(0 4px 8px rgba(243, 203, 65, 0.3))';
                this.style.opacity = '0.8';
                
                // Reset title
                if (heroTitle) {
                    heroTitle.style.color = '#e8e6e3';
                    heroTitle.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';
                }
            });
        }
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
