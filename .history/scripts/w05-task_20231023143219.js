/* W05: Programming Tasks */

// Step 1: Setup:

// 1. Download the starter files (2). Place the w05-task.html file on the root cse121b 
// folder and the w05-task.js file in the scripts folder.
 
// Step 2: Review the Public Temple Data:

// 1. Navigate to this temple JSON file by clicking on the link.
// temple JSON file: https://byui-cse.github.io/cse121b-ww-course/resources/temples.json
// 2. Quickly Review and become familiar with the temple data format.

/* Step 3: Declare and initialize global variables */

// 1. Declare a const variable named templesElement that references the HTML div element 
// that eventually will be populated with temple data.
const templesElement = document.querySelector("#temples");
// 2. Declare a global empty array variable to store a list of temples named templeList.
let templeList = [];

/* Step 4: async displayTemples Function */

// 1. Declare a function expression using const named displayTemples that uses an arrow 
// function to accept a list of temples as an array argument.
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement("article");                 
        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;
        let img = document.createElement("img");
        img.setAttribute("src",temple.imageUrl);
        img.setAttribute('alt', temple.location);
        
        article.appendChild(templeName);
        article.appendChild(img);

        templesElement.appendChild(article);                
    });            
};



/* async getTemples Function using fetch()*/


/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */



