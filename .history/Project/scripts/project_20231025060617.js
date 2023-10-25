/* Project */

// Short Quiz Section

function add(Number1, Number2, Number3) {
    return Number1 + Number2 + Number3;
}

function addTemples() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    let addNumber3 = Number(document.querySelector('#add3').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2, addNumber3);
}
document.querySelector('#addTemples').addEventListener('click', addTemples);

// For button: Check if the Total Number of Temples is correct or incorrect? (Code not working)
const answer = (addTemples) => {
    return addTemples;
}
const checkAnswer = () => {
    let correct_answer = parseInt(document.querySelector('#answer').value);
    let wrong_answer = parseInt(document.querySelector('#answer').value);
    if(answer === correct_answer) {
        let result = print("Correct! Well done!");
        document.querySelector('#answer').value = result;
    if(answer === wrong_answer) {
        let result = print("Incorrect! Try again!");
        document.querySelector('#answer').value = result;
    }      
    }  
}   
document.querySelector('#checkAnswer').addEventListener('click', checkAnswer);        

// Temples of the Church of Jesus Christ of Latter-Day Saints in Africa

// temple JSON file: https://run.mocky.io/v3/95faf416-1fea-44ce-9a35-82e9efc902e1

const templesElement = document.querySelector("#temples");
let templeList = [];

const displayTemples = (temples) => {
    temples.forEach(temple => {        
    let article = document.createElement("article");                    
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
    let url = "https://run.mocky.io/v3/95faf416-1fea-44ce-9a35-82e9efc902e1";
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

