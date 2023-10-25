/* W05: Programming Tasks */

// Step 1: Setup:

// 1. Download the starter files (2). Place the w05-task.html file on the root cse121b 
// folder and the w05-task.js file in the scripts folder.
 
// Step 2: Review the Public Temple Data:

// 1. Navigate to this temple JSON file by clicking on the link.
// temple JSON file: https://byui-cse.github.io/cse121b-ww-course/resources/temples.json
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
// 2.Process each temple in the temple array using a forEach method and do the 
// following for each temple item:
    temples.forEach(temple => {
// 1. Create an HTML <article> element (createElement).        
    let article = document.createElement("article"); 
// 2. Create an HTML <h3> element and add the temple's templeName property to this 
// new element.                     
    let templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;
// 3. Create an HTML <img> element and add the temple's imageUrl property to the src 
// attribute and the temple's location property to the alt attribute.    
    let img = document.createElement("img");
    img.setAttribute("src",temple.imageUrl);
    img.setAttribute("alt", temple.location);
// 4. Append the <h3> element and the <img> element to the <article> element as children. 
// (appendChild)        
    article.appendChild(templeName);
    article.appendChild(img);
// 5. Append the <article> element to the global templesElement variable declared in Step 2.
    templesElement.appendChild(article);                
    });            
};




getTemples();