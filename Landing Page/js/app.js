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

const sections = document.getElementsByTagName('section');
const sectionNavName = "data-nav";

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
* @description Generate a paragraph dynamcially
* @param {paraText} Consumer enters the paragraph text
* @returns {p} Dynamically generated paragraph
*/
function createParagraph(paraText) {
    let para1 = document.createElement("p");
    para1.textContent = paraText;
    return para1;
}

/**
* @description Creates an unordered list
* @param {ulElement} unordered list
* @param {sections} sections to be linked to the list
* Order of adding elements - ul > li > a
* Order of adding elements - ulElement > liElement > aElement
* @returns list of elements
*/
function createList(ulElement, sections) {
    for (let i = 0; i < sections.length; i++) {
        const aElement = document.createElement('a');
        aElement.className = "links";
        aElement.href = `#section${ulElement.children.length + 1}`;
        aElement.innerHTML += `${aElement}`;
        aElement.innerText = `${sections[i].getAttribute(sectionNavName)}`;

        const liElement = document.createElement('li');  // ul > li > a
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
    }
}

/**
* @description Generates a section dynamically
* @param {sectionId} Id of the section
* @param {sectionName} Section Name as appears on the webpage
* @returns {section} 
*/
function addSection(sectionId, sectionName) {
    let section = document.createElement("section");
    section.id = sectionId;
    section.setAttribute(sectionNavName, sectionName);
    return section;
}

/**
* @description Creates a section and add to the nav
* @param {sectionId} Id of the section
* @param {sectionName} Section Name as appears on the webpage
* @returns {section} section
*/
function createSection(sectionId, sectionName) {
    let nextDiv = document.createElement("div");
    nextDiv.className = 'landing__container';
    let h2 = document.createElement("h2");
    h2.innerText = sectionName;
    nextDiv.append(h2);

    let para1 = createParagraph("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.");

    let para2 = createParagraph("Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.");

    nextDiv.append(para1);
    nextDiv.append(para2);

    let section4 = addSection(sectionId, sectionName + " ");
    section4.appendChild(nextDiv);

    const mainSection = document.body.getElementsByTagName('main')[0];
    mainSection.appendChild(section4);
    return mainSection;
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

document.addEventListener('DOMContentLoaded', function () {
    createSection('section1', 'Section 1');
    createSection('section2', 'Section 2');
    createSection('section3', 'Section 3');
    createSection('section4', 'Section 4');
    createSection('section5', 'Section 5');

    const ulElement = document.getElementById('navbar__list');
    createList(ulElement, sections);
});


// Add class 'active' to section when near top of viewport

var timer = null;
document.addEventListener('scroll', function () {
    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        const navBarList = document.getElementById('navbar__list');
        let current = document.getElementsByClassName('active');

        for (let index = 0; index < sections.length; index++) {
            const element = sections[index];
            const sectionRect = element.getBoundingClientRect();
            innerScroll = window.scrollY;
            var visible = window.scrollY > 0 && sectionRect.top < window.innerHeight / 2 && sectionRect.bottom >= window.innerHeight / 2;

            if (visible) {
                element.classList.add('active');
                navBarList.childNodes[index].classList.add('active');
            }
            else if (current.id !== element.id) {
                element.classList.remove('active');
                navBarList.childNodes[index].classList.remove('active');
            }
        }
    }, 100);
}, false);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

addEventListener('click', menuClick);

function menuClick(evt) {
    if (evt.target.nodeName === 'A') {
        evt.preventDefault();
        for (let index = 0; index < sections.length; index++) {
            const element = sections[index];
            if (evt.target.hash.replace("#", "") === element.id) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }

}

// Set sections as active


