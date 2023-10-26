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

// temple JSON file: https://run.mocky.io/v3/95faf416-1fea-44ce-9a35-82e9efc902e1

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

getTemples();