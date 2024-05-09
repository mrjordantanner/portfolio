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
    // console.log(event);
    // console.log('scroll init');
});

// Scroll Anchors
// Header Section
$( '#link-header' ).click(function() {
    scroll.scrollTo('top', { duration: 2000 });
});

// About Section
const aboutTarget = $( '#intro' );
$( '#link-about' ).click(function() {
    scroll.scrollTo(aboutTarget[0], {  });

});

// Navbar project links
const p1Target = $( '#project-1' );
$( '#link-work-1' ).click(function() {
    const height = $( window ).height();
    const offset = height * -0;
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

// Contact Section
const contactTarget = $( '#contact' );
$( '#link-contact' ).click(function() {
    scroll.scrollTo(contactTarget[0], { duration: 2000 } );
});

// Project images show/hide
$( '#p1-image' ).hide();
$( '#p1' ).mouseenter(function() {
    $( '#p1-image' ).stop(true, true).fadeIn();
    $('#p1-hover-label').children().addClass('hidden');
    $('#p1-description').addClass('hidden');
    $('#p1-number').addClass('hidden');
});
$( '#p1' ).mouseout(function() {
    $( '#p1-image').stop(true, true).fadeOut();
   $('#p1-hover-label').children().removeClass('hidden')
   $('#p1-description').removeClass('hidden')
   $('#p1-number').removeClass('hidden');
});

$( '#p2-image' ).hide();
$( '#p2' ).mouseenter(function() {
    $( '#p2-image' ).stop(true, true).fadeIn();
   $('#p2-hover-label').children().addClass('hidden');
    $('#p2-description').addClass('hidden');
    $('#p2-number').addClass('hidden');
});
$( '#p2' ).mouseout(function() {
    $( '#p2-image').stop(true, true).fadeOut();
    $('#p2-hover-label').children().removeClass('hidden')
    $('#p2-description').removeClass('hidden')
    $('#p2-number').removeClass('hidden');
});

$( '#p3-image' ).hide();
$( '#p3' ).mouseenter(function() {
    $( '#p3-image' ).stop(true, true).fadeIn();
    $('#p3-hover-label').children().addClass('hidden');
    $('#p3-description').addClass('hidden');
    $('#p3-number').addClass('hidden');
});
$( '#p3' ).mouseout(function() {
    $( '#p3-image').stop(true, true).fadeOut();
   $('#p3-hover-label').children().removeClass('hidden')
    $('#p3-description').removeClass('hidden')
    $('#p3-number').removeClass('hidden');
});

$( '#p4-image' ).hide();
$( '#p4' ).mouseenter(function() {
    $( '#p4-image' ).stop(true, true).fadeIn();
    $('#p4-hover-label').children().addClass('hidden');
    $('#p4-description').addClass('hidden');
    $('#p4-number').addClass('hidden');
});
$( '#p4' ).mouseout(function() {
    $( '#p4-image').stop(true, true).fadeOut();
   $('#p4-hover-label').children().removeClass('hidden')
   $('#p4-description').removeClass('hidden')
   $('#p4-number').removeClass('hidden');
});
