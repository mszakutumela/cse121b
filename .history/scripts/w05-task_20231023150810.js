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

/* Step 5: async getTemples Function using fetch()*/

// 1. Create another function expression called getTemples. Make it an async anonymous, 
// arrow function.
const getTemples = async () => {
    let url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
// 2. In the function, declare a const variable named response that awaits the built-in 
// fetch method calling the temple data, absolute URL given in Step 2 above.
    const response = await fetch(url);
// 3. Convert your fetch response into a JavaScript object (.json) and assign the result 
// to the templeList global array variable you declared in Step 3 above. Make sure the 
// the execution of the code waits here as well until it finishes.  
    if (response.ok){
        templeList = await response.json();
// 4. The last statement in the getTemples function calls the displayTemples function and 
// passes it the list of temples (templeList).   
        displayTemples(templeList);
    }
}


/* Step 6: reset Function */

// 1. Declare a function expression named reset that clears all of the <article> elements 
// from the templesElement.
let reset = () => {
    templesElement.innerHTML = "";
}


/* Step 7: sortBy Function */

// 1. Declare a function expression named sortBy.
const sortBy = (temples) => {    
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch (filter) {
      case "utah":
          displayTemples(temples.filter((temple)=>temple.location.includes("Utah")));
          break;
      case "notutah":    
      displayTemples(temples.filter((temple)=>!temple.location.includes("Utah")));
          break;
      case "older":  //Built Before 1950
        let fecha0 = new Date(1950,0,1);
        displayTemples(temples.filter((temple)=>fecha0 > new Date(temple.dedicated))); 
          break;
      case "all":  
          displayTemples(temples);
          break;                                               
    }
}

getTemples();

/* Step 8: Event Listener */

// 1. Add a change event listener to the HTML element with an ID of sortBy that calls the 
// sortBy function and sends a arrow function result with the templeList as the argument.
document.querySelector('#sortBy').addEventListener('change',() => sortBy(templeList));


    /* Event Listener */
document.querySelector('#sortBy').addEventListener('change',() => sortBy(templeList));

