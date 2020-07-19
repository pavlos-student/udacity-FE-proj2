/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// get the UL element that represents the navigation nav-bar
const navigationElement = document.getElementById('navbar__list');
// get all the sections
const sectionList = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBuilder = () => {
    // init the variable that will hold the navigation UI
    let navUI = '';
    // iterate the sections to add their navUI
    sectionList.forEach(section => {
        const sectionId = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionId}">${sectionDataNav}</a></li>`;
    });
    // append the navUI elements (<li>) to the navigationElement (<ul>)
    navigationElement.innerHTML = navUI;
};
// call the navigation builder function to add dynamically the menu list to the nav-bar
navBuilder();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


