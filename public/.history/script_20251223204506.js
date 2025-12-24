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
