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
    scrollFromAnywhere: true
});



// Reset scroll on window resize
$( window ).resize(function() {
    scroll.update();
  });




// Anchor navigator (next/prev)



// Scroll Anchors
// Header Section
$( '#link-header' ).click(function() {
    scroll.scrollTo('top');
});

// Work Section
const workTarget = $( '#js-target-work' );
const linkWork = $( '#link-work' ).click(function() {
    const height = $( window ).height();
    const offset = height * -0;
    // console.log(height, offset);
    scroll.scrollTo(workTarget[0], { offset: offset });

});



// Scroll Progress
scroll.on('scroll', (args) => {

    if(typeof args.currentElements['scroll-tracker'] === 'object') {
        let progress = args.currentElements['scroll-tracker'].progress;
        // console.log(progress);

    }
});
