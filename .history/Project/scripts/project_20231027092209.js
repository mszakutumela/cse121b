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

// Temples of the Church of Jesus Christ of Latter-Day Saints in Africa

// temple JSON file: https://mszakutumela.github.io/cse121b/temples_in_africa.json

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {      
    let article = document.createElement("article");                   
    let templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;

    let img = document.createElement("img");
    img.setAttribute("src",temple.imageUrl);
    img.setAttribute("alt", temple.location);
       
    article.appendChild(templeName);
    article.appendChild(img);

    templesElement.appendChild(article);                
    });            
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    let url = "https://mszakutumela.github.io/cse121b/temples_in_africa.json";
    const response = await fetch(url);
    if (response.ok){
        templeList = await response.json();
        displayTemples(templeList);
    }
}

/* Reset Function */

let reset = () => {
    templesElement.innerHTML = "";
}

/* SortBy Function */

const sortBy = (temples) => {
    reset();
    let filter = document.querySelector("#sortBy").value;
        switch (filter) {  

            case "operate":
                displayTemples(temples.filter((temple) => temple.status.includes("use")));
                break;
             
            case "construct":    
                displayTemples(temples.filter((temple) => temple.status.includes("progress")));
                break;

            case "named":
                displayTemples(temples.filter((temple) => temple.status.includes("notbornyet")));
                break;    
                        
            case "all":
                displayTemples(temples);
                break;                                               
        }
    }
    
    /* Event Listener */
    
    document.querySelector("#sortBy") .addEventListener("change", () => { sortBy(templeList) });

/* SortBy2 Function */

const sortBy2 = (temples) => {
    reset();
    let filter = document.querySelector("#sortBy2").value;
        switch (filter) {  

            case "aba":
                displayTemples(temples.filter((temple) => temple.location.includes("use")));
                break;
             
            case "accra":    
                displayTemples(temples.filter((temple) => temple.location.includes("use")));
                break;atu

            case "durban":
                displayTemples(temples.filter((temple) => temple.location.includes("use")));
                break;    

            case "johannesburg":
                displayTemples(temples.filter((temple) => temple.location.includes("use")));
                break;    
                    
            case "kinshasa":
                displayTemples(temples.filter((temple) => temple.location.includes("use")));
                break;            
                        
            case "all":
                displayTemples(temples.filter((temple) => temple.location.includes("use")));
                break;                                               
        }
    }
    
getTemples();

           