/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Ayanda Ndlovu";
let currentYear = new Date().getFullYear();
const profilePicture = "images/20221109_183304.jpg" 

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('scr', profilePicture);
imageElement.setAttribute('alt', profilePicture);
imageElement.setAttribute('title', profilePicture);

/* Step 5 - Array */
let favoriteFoods = ['Spinach', 'Carrots', 'Chicken', 'Couscous', 'Butternut'];
foodElement.innerHTML = `${favoriteFoods}`;
let anotherSingleFood = ['Green Apples'];
favoriteFoods.push(anotherSingleFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;

let elements = favoriteFoods.length;
favoriteFoods.map( (item, index)=>{  
    index < elements-1 ? foodElement.innerHTML +=`${item}, `: foodElement.innerHTML += `${item}</s<br>`;   
   });
array.push(anotherFavoriteFood);

array.map( (item, index)=>{ 
index < elements ? foodElement.innerHTML +=`<em> ${item}</em>,`: foodElement.innerHTML +=` ${item}.<br>`;       
});

array.shift();   
array.map( (item, index)=>{ 
index < elements-1 ? foodElement.innerHTML +=`<em> ${item}</em>,`: foodElement.innerHTML +=` ${item}.<br>`;       
});

array.pop();
array.map( (item, index)=>{ 
index < elements-2 ? foodElement.innerHTML +=`<em>${item}</em>, `: foodElement.innerHTML +=` ${item}.<br>`;   
});

// favoriteFoods.pop(0);
// foodElement.innerHTML += `<br>${favoriteFoods}`;
// favoriteFoods.pop();
// foodElement.innerHTML += `<br>${favoriteFoods}`;

// _________________________________________________________________________



// /* Step 5 - Array */
// //let favFoods = ["pozole","entomatadas","mole","menudo", ];
// /*let favFoods = ["pozole "," entomatadas "," mole "," menudo "];
// let foodElement1=document.getElementById('food');
// let text = favFoods.join();
// let item = foodElement1.innerHTML =` <strong>${text}</strong>`;
//    console.log(item);

// //const fruits = ["Banana", "Orange", "Apple", "Mango"];
// //let text = fruits.join();
// //console.log(text);
// //foodElement1.innerHTML = favFoods.join(',');
// //console.log('soy ',foodElement1);
// //let newFavoriteFood = "beans" ;
// */
// /* Step 1 - Setup type tasks - no code required */

// /* Step 2 - Variables */
// let fullName ="Augusto Achá";
// let currentYear = new Date();
// const profilePicture ="images/augusto.jpg";
// /* Step 3 - Element Variables */
// let nameElement = document.getElementById('name');
// nameElement.innerHTML = `<strong>${fullName}</strong>`;
// nameElement.style.fontSize='16px';
// nameElement.style.padding='1rem';

// let foodElement = document.getElementById('food');
// let yearElement = document.querySelector('#year');
// /* Step 4 - Adding Content */
// //Who returns an HTML collection? (HTML collection is an array)
// //The getElementsByTagName() Method
// //The getElementsByClassName() Method
// //The children Property
// //https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp
// let img_ = document.getElementsByTagName('img');
// let imageElement = img_[0].setAttribute('src', profilePicture);
// img_[0].setAttribute('alt', `${profilePicture}`);
// img_[0].setAttribute('title', `${profilePicture}`);
// /* Step 5 - Array */
// let array = ['chicken soup','meat balls','rice','tacos'];
// let anotherFavoriteFood = 'pasta';

// let elements = array.length;

// array.map( (item, index)=>{ //mapping each element. Index the element
//                            //check the last element and replace the , for the '.'  
//                            index < elements-1 ? foodElement.innerHTML +=`<strong>${item}</strong>, `: foodElement.innerHTML +=` <strong>${item}</strong>.<br>`;   
//                           });
// array.push(anotherFavoriteFood);

// array.map( (item, index)=>{ 
//     index < elements ? foodElement.innerHTML +=`<em> ${item}</em>,`: foodElement.innerHTML +=` ${item}.<br>`;       
//    });

// array.shift();   
// array.map( (item, index)=>{ 
//     index < elements-1 ? foodElement.innerHTML +=`<em> ${item}</em>,`: foodElement.innerHTML +=` ${item}.<br>`;       
//    });

// array.pop();
// array.map( (item, index)=>{ 
//     index < elements-2 ? foodElement.innerHTML +=`<em>${item}</em>, `: foodElement.innerHTML +=` ${item}.<br>`;   
//    });















