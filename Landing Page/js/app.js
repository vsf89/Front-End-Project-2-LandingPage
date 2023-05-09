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
const navBarMenu = document.querySelectorAll("navbar__menu");
// const sections = document.getElementsByTagName('section');
const div = document.getElementsByClassName('landing__container');
const sectionNavName = "data-nav";

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


function createParagraph(paraText){
    let para1 = document.createElement("p");
    para1.textContent = paraText;
    return para1;
}

function addSection(sectionId, sectionName){
    let section = document.createElement("section");
    section.id = sectionId; 
    section.setAttribute(sectionNavName, sectionName);  
    return section;
}

/*
// ul > li > a
// ulEl > liEl > aEl
 */
function createList(ulElement, sections){
    for (let i = 0; i < sections.length; i++) {
        const aElement = document.createElement('a');
        aElement.href = `#section${ulElement.children.length + 1}`;
        aElement.innerHTML += `${aElement}`;
        aElement.innerText = `${sections[i].getAttribute(sectionNavName)}`;     
       
        const liElement = document.createElement('li');  // ul > li > a
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
    }
}

function createSection(sectionId, sectionName) {
    let div4 = document.createElement("div");
    div4.className = 'landing__container';
    let h2 = document.createElement("h2");
    h2.innerText = sectionName;
    div4.append(h2);

    let para1 = createParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.");

    let para2 = createParagraph("Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.");

    div4.append(para1);
    div4.append(para2);

    let section4 = addSection(sectionId, sectionName);
    section4.appendChild(div4);

    const mainSection = document.body.getElementsByTagName('main')[0];
    mainSection.appendChild(section4);
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

document.addEventListener('DOMContentLoaded', function () { 
    createSection('section4', 'Section 4');    

    const ulElement = document.getElementById('navbar__list');
    const sectionsList = document.getElementsByTagName('section');
    createList(ulElement, sectionsList);
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


