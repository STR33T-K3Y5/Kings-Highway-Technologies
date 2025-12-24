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
        
