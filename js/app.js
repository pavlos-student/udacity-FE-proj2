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
//
const navBuilder = () => {
    // init the variable that will hold the navigation UI
    let navUI = '';
    // iterate the sections to add their navUI
    sectionList.forEach(section => {
        const sectionId = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" data-link="${sectionId}">${sectionDataNav}</a></li>`
    });
    // append the navUI elements (<li>) to the navigationElement (<ul>)
    navigationElement.innerHTML = navUI;
};

//
// Add class 'active' to section when near top of viewport
//
// gets the size of the element and its position relative to the viewport.
const sectionOffset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove active class
const removeActiveClass = (section) => {
    section.classList.remove('active-class');
};

// add active class
const addActiveClass = (condition, section) => {
    if(condition) {
        section.classList.add('active-class');
    }
};

// call the above functions to add 'active-class' for each section scrolled over
const activateSection = () => {
    sectionList.forEach(section => {
        const offsetElement = sectionOffset(section);

        let inViewPort = () => offsetElement < 150 && offsetElement >= -150;

        removeActiveClass(section);
        addActiveClass(inViewPort(), section);
    })
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
navBuilder(); // call the navigation builder function to add dynamically the menu list to the nav-bar

// Scroll to section on section link click (listens to the mouse click-event in the navlist (navbar__list)
navigationElement.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionToScrollTo = document.getElementById(event.target.dataset.link);
    sectionToScrollTo.scrollIntoView({block: 'end', behavior: 'smooth'});
});

// Set sections as active
window.addEventListener('scroll', activateSection);
