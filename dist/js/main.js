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
// Remove top bar when navigating to the home page
// menuBranding.addEventListener('click', hideOnClick); 

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