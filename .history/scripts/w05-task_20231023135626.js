/* W05: Programming Tasks */

// Setup:

// 1. Download the starter files (2). Place the w05-task.html file on the root cse121b 
// folder and the w05-task.js file in the scripts folder.
 
// Review the Public Temple Data:



/* Declare and initialize global variables */


/* async displayTemples Function */




/* async getTemples Function using fetch()*/


/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */



/* W05: Programming Tasks */
//https://byui-cse.github.io/cse121b-ww-course/resources/temples.json
/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];
/* async displayTemples Function */
let displayTemples = (temples) => {
                //getTemples();
                temples.forEach(temple => {
                let article = document.createElement('article');                 
                let templeName = document.createElement('h3');
                templeName.textContent = temple.templeName;
                let img = document.createElement('img');
                img.setAttribute('src',temple.imageUrl);
                img.setAttribute('alt', temple.location);
                
                article.appendChild(templeName);
                article.appendChild(img);

                templesElement.appendChild(article);                
            });            
};
/* async getTemples Function using fetch()*/
const getTemples = async () =>{
    let url = 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json';
    const response = await fetch(url);
    if (response.ok){
        templeList = await response.json();
        //console.log(data);
       displayTemples(templeList);       
      };
}
const getTemples__ = async () =>{
    let url = 'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json';
    const response = await fetch(url);
    if (response.ok){
        templeList = await response.json();
        //console.log(data);
       //displayTemples(templeList);       
      };
}
/* reset Function */
let reset = ()=> {      
    templesElement.innerHTML ='';    
}
/* sortBy Function */
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
    /* Event Listener */
document.querySelector('#sortBy').addEventListener('change',() => sortBy(templeList));
