import LocomotiveScroll from 'locomotive-scroll';

// Initialize Locomotive Scroll Instance
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.05, // Linear Interpolation, 0 > 1 // Try 0.01  // was 0.06
    multiplier: 1, // Effect Multiplier   // was 1.4
    reloadOnContextChange: true,
    scrollFromAnywhere: true,
    touchMultiplier: 2,   // was 3
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

// document.getElementById('contact-button').addEventListener('click', function() {
//     document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
// },

document.addEventListener("DOMContentLoaded", function(event) { 
    document.body.classList.add('fade-in');
    document.body.classList.remove('fade-out');

    // Theme toggle switch
    document.getElementById('theme-toggle').addEventListener('click', OnClickThemeToggle);

    function OnClickThemeToggle() {
        document.body.classList.toggle('alternate');
        
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.classList.toggle('rotate-animation-1');
        themeToggle.classList.toggle('rotate-animation-2');
    }
    // Project Section - Show/Hide elements on hover
    // const projects = document.querySelectorAll('.project');
    // const hideOnHover = document.querySelectorAll('.hide-on-hover');

    // projects.forEach(project => {
    //     const projectTitle = project.querySelector('.project-title');
    //     const projectImage = project.querySelector('.project-image');
    //     if (projectImage) {

    //         projectTitle.addEventListener('mouseenter', function() {
    //             projectImage.classList.add('fade-in');
    //             projectImage.classList.remove('fade-out');
    //             hideOnHover.forEach(el => el.classList.add('fade-out'))

    //         });
    //         projectTitle.addEventListener('mouseleave', function() {
    //             projectImage.classList.remove('fade-in');
    //             projectImage.classList.add('fade-out');
    //             hideOnHover.forEach(el => el.classList.remove('fade-out'));
    //         });
    //     }
    // });

    // Initialize scroll after DOM is fully loaded
    scroll.init();
});
