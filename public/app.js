import LocomotiveScroll from 'locomotive-scroll'

// Document Fade
document.body.className += ' fade-out';
$(function() {
    $('body').removeClass('fade-out');
});

// Theme switch
document.getElementById('theme-toggle').addEventListener('click', OnClickThemeToggle);

function OnClickThemeToggle() {
    document.body.classList.toggle('alternate');
    
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.classList.toggle('rotate-animation-1');
    themeToggle.classList.toggle('rotate-animation-2');
  }

// New Scroll Instance
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.06, // Linear Interpolation, 0 > 1 // Try 0.01
    multiplier: 1.4, // Effect Multiplier
    reloadOnContextChange: true,
    scrollFromAnywhere: true,
    touchMultiplier: 3,
    smoothMobile: 1,
    smartphone: {
        smooth: 1,
        // breakpoint: 767
    },
    tablet: {
        smooth: 1,
        // breakpoint: 1024
    },
});

scroll.destroy();

document.addEventListener("DOMContentLoaded", function(event) { 
    event.stopPropagation();
    scroll.init();
});

// Scroll Anchors
$( '#link-header' ).click(function() {
    scroll.scrollTo('top', { duration: 2000 });
});
const aboutTarget = $( '#intro' );
$( '#link-about' ).click(function() {
    scroll.scrollTo(aboutTarget[0], {  });
});
const p1Target = $( '#project-1' );
$( '#link-work-1' ).click(function() {
    scroll.scrollTo(p1Target[0], { offset: offset });
});
const p2Target = $( '#project-2' );
$( '#link-work-2' ).click(function() {
    scroll.scrollTo(p2Target[0], { });
});
const p3Target = $( '#project-3' );
$( '#link-work-3' ).click(function() {
    scroll.scrollTo(p3Target[0], {  });
});
const p4Target = $( '#project-4' );
$( '#link-work-4' ).click(function() {
    scroll.scrollTo(p4Target[0], { });
});
const contactTarget = $( '#contact' );
$( '#link-contact' ).click(function() {
    scroll.scrollTo(contactTarget[0], { duration: 2000 } );
});

// Project Section - Show/Hide elements on hover
$( '.project-image' ).hide();
$( '.project-title' ).mouseenter(function() {
    $( '.project-image' ).stop(true, true).fadeIn();
    $( '.hide-on-hover' ).addClass('hidden');
});
$( '.project-title' ).mouseout(function() {
    $( '.project-image' ).stop(true, true).fadeOut();
    $( '.hide-on-hover' ).removeClass('hidden');
});
