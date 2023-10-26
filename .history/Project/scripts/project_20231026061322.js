/* Project */

// Temples of the Church of Jesus Christ of Latter-Day Saints in Africa

// temple JSON file: https://run.mocky.io/v3/95faf416-1fea-44ce-9a35-82e9efc902e1
const templesElement = document.querySelector("#temples");
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

getTemples();