// Select doc object model items 

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
navItems.forEach(item => item.addEventListener('click', hideOnClick));

// Remove top bar when navigating to the home page if the screen is for tablets and below, otherwise it stays
if(window.innerWidth < 870){
    menuBranding.addEventListener('click', hideOnClick); 
}

function toggleMenu() {
    if(!showMenu) { // Displays the menu
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set the menu state to true
        showMenu = true;

    } else { // Hides the menu
        hideMenu();
    }
}

function hideOnClick() {
    if(showMenu) { // Menu is visible
        hideMenu();
    }
}

function hideMenu() {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set the menu state to false
    showMenu = false;
}

// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar 
var prevScrollPos = window.pageYOffset;

window.onscroll = function() {

    if(!showMenu) {
        var currentScrollPos = window.pageYOffset;
    
        if (prevScrollPos > currentScrollPos) { // Show
            menuBtn.style.top = "35px";
        } else { // Hide
            menuBtn.style.top = "-35px";
        }

        prevScrollPos = currentScrollPos;
    }
}

// ScrollReveal functions
//ScrollReveal().reveal('main', {distance: '50px'});

// Home page
ScrollReveal().reveal('.sm-heading-top', { delay: 500, distance: '50px' });
ScrollReveal().reveal('.icons', { delay: 1000, distance: '50px' });
ScrollReveal().reveal('.menu-btn', { origin: 'top', distance: '50px'})

// About page
ScrollReveal().reveal('.about-info');
ScrollReveal().reveal('.hobby', { interval: 200 });

// Projects page
ScrollReveal().reveal('.item', { interval: 100, distance: '50px' });

// Resume page
ScrollReveal().reveal('.boxes-resume', { distance: '100px' });

// Contact info
ScrollReveal().reveal('.boxes-contact', { distance: '100px' });

/* TEMP TODO
fix menu button
home page
start screen on home*/