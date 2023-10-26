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
    let url = "https://mszakutumela.github.io/cse121b/temples_in_africa.json";
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
// 2. The function should accept a argument in a parameter named temples.
const sortBy = (temples) => { 
// 3. In this function, first call the reset function to clear the output.       
    reset();
// 4. Define a variable named filter that obtains the value of the HTML element 
// with the ID of sortBy (The pull-down menu).   
    let filter = document.querySelector("#sortBy").value;
// 5. Use a switch statement that uses the filter value as the selector responding to 
// four (4) cases.
// 6. For each case, call the displayTemples function using an filter statement that 
// filters the temples parameter for the four options provided.     
    switch (filter) {
// 6.1 "utah": filter for temples where the location contains "Utah" as a string.         
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;
// 6.2 "notutah": filter for temples where the location does not contain "Utah" as a string.          
        case "notutah":    
            displayTemples(temples.filter((temple) =>! temple.location.includes("Utah")));
            break;
// 6.3 "older": filter for temples where the dedicated date is before 1950. (compare versus 
//     new Date(1950, 0, 1)).           
        case "older":
            let fetchOlder = new Date(1950, 0, 1);
            displayTemples(temples.filter((temple) => fetchOlder > new Date(temple.dedicated))); 
            break;
// 6.4 "all": no filter. Just use temples as the argument.          
        case "all":
            displayTemples(temples);
            break;                                               
    }
}

/* Step 8: Event Listener */

// 1. Add a change event listener to the HTML element with an ID of sortBy that calls the 
// sortBy function and sends a arrow function result with the templeList as the argument.
document.querySelector("#sortBy") .addEventListener("change", () => { sortBy(templeList) });

getTemples();