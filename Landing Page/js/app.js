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


/* 
Build the navigation menu. 
This will dynamically create a navigation menu based on the sections of the page. 
This can be a particularly useful trick when you begin working with content management systems or APIs when you are uncertain of where the items will be.
Are you listening for an event for the navigation to build?
Where are you placing the navigation?
Where is the text for each navigation item coming from and where are you anchoring to?
How are you going to add each navigation item to your menu? 
    (Hint: there are several ways to do this. 
        Do some research to figure out which makes the most sense for your situation. 
            Performance? Clarity?).

<section id="section1" data-nav="Section 1" class="your-active-class">

   <nav class="navbar__menu">
      <!-- Navigation starts as empty UL that will be populated with JS -->
      <ul id="navbar__list"></ul>
    </nav>

Navigation is built dynamically as an unordered list. 
Start with empty ul and dynamically build navigation using Append, appendChild, and innerHTML.

 <li onclick="showDetails(this)" id="owl" data-animal-type="bird">Owl</li>

 function showDetails(animal) {
  var animalType = animal.getAttribute("data-animal-type");
  alert("The " + animal.innerHTML + " is a " + animalType + ".");
}
*/

// ul > li > a
// ulEl > liEl > aEl
function addSpace(str) {
    return str.split('').join(' ');
  }

document.addEventListener('DOMContentLoaded', function() { 
    const ulEl = document.getElementById('navbar__list');    
    for (let i = 0; i < items.length; i++) {
       const aEl = document.createElement('a');    
       aEl.href = `#section${ulEl.children.length + 1}`;
       aEl.innerHTML += `${aEl}`;    
       aEl.innerText = `${items[i]}`;       
    
       // ul > li > a
       const liEl = document.createElement('li');
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


