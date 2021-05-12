import LocomotiveScroll from 'locomotive-scroll';

// Document fade-in
document.body.className += ' fade-out';
$(function() {
    $('body').removeClass('fade-out');
});

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.06
});

// const target = document.querySelector('#js-scroll-target');
// scroll.scrollTo(target);
