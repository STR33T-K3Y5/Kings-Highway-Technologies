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
                
