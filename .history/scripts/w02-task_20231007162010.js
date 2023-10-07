/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Ayanda Ndlovu";
let currentYear = new Date().getFullYear();
const profilePicture = "images/20221109_183304.jpg"; 

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#home picture img');
// const blockElement = document.getElementsByTagName('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('scr', profilePicture);
imageElement.setAttribute('alt', `${profilePicture}`);
imageElement.setAttribute('title', `${profilePicture}`);

// imageElement.innerHTML = `${profilePicture}`;
// let imageElement = image[0].setAttribute('scr', profilePicture);
// image[0].setAttribute('alt', `${profilePicture}`);
// image[0].setAttribute('title', `${profilePicture}`);

/* Step 5 - Array */

// 1. Declare an array variable to hold your favorite foods.
let favoriteFoods = ['Spinach', 'Carrots', 'Chicken', 'Couscous', 'Butternut'];
// 2. Modify the HTML element with the id of food to display your favorite foods array. 
// 💡Remember that you set a variable named foodElement in Step 3 to reference the element with the id of food.
foodElement.innerHTML = `${favoriteFoods}`;
let anotherSingleFood = ['Green Apples'];
favoriteFoods.push('Green Apples');
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;














