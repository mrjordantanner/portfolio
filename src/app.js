import LocomotiveScroll from 'locomotive-scroll';

// Document Fade
document.body.className += ' fade-out';
$(function() {
    $('body').removeClass('fade-out');
});

// Theme switch
document.querySelector('[data-switch-dark]').addEventListener('click', function() {
    document.body.classList.toggle('dark');
  });

// New Scroll Instance
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.06,
    scrollFromAnywhere: true,
    getSpeed: true
});

// On scroll 
// scroll.on('scroll', (obj) => {

// });
// Magic mouse
// options = {
//     "cursorOuter": "circle-basic",
//     "hoverEffect": "circle-move",
//     "hoverItemMove": false,
//     "defaultCursor": false,
//     "outerWidth": 30,
//     "outerHeight": 30
//   }; 
// magicMouse(options);



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

// PROJECTS
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
$( '#trnkt-image' ).hide();
$( '#trnkt' ).mouseenter(function() {
    $( '#trnkt-image' ).fadeIn();
});
$( '#trnkt' ).mouseout(function() {
    $( '#trnkt-image').fadeOut();
});

$( '#throw-6-image' ).hide();
$( '#throw-6' ).mouseenter(function() {
    $( '#throw-6-image' ).fadeIn();
});
$( '#throw-6' ).mouseout(function() {
    $( '#throw-6-image').fadeOut();
});

$( '#deep-dive-image' ).hide();
$( '#deep-dive' ).mouseenter(function() {
    $( '#deep-dive-image' ).fadeIn();
});
$( '#deep-dive' ).mouseout(function() {
    $( '#deep-dive-image').fadeOut();
});

$( '#clique-image' ).hide();
$( '#clique' ).mouseenter(function() {
    $( '#clique-image' ).fadeIn();
});
$( '#clique' ).mouseout(function() {
    $( '#clique-image').fadeOut();
});




// Scroll Progress
// scroll.on('scroll', (args) => {

//     if(typeof args.currentElements['scroll-tracker'] === 'object') {
//         let progress = args.currentElements['scroll-tracker'].progress;
//         // console.log(progress);

//     }
// });
