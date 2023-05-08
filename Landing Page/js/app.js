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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navMenu = document.querySelectorAll("navbar__menu");
//const navList = document.getElementById('navbar__list'); // data-nav
const items = ["Section 1", "Section 2", "Section 3", "Section 4"];

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


// ul > li > a
// ulEl > liEl > aEl
function addSpace(str) {
    return str.split('').join(' ');
}

document.addEventListener('DOMContentLoaded', function () {
    const ulEl = document.getElementById('navbar__list');
    for (let i = 0; i < items.length; i++) {
        const aEl = document.createElement('a');
        aEl.href = `#section${ulEl.children.length + 1}`;
        aEl.innerHTML += `${aEl}`;
        aEl.innerText = `${items[i]}`;
       
        const liEl = document.createElement('li');  // ul > li > a
        liEl.appendChild(aEl);
        ulEl.appendChild(liEl);
    }
});





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


