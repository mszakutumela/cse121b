/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Ayanda Ndlovu";
let currentYear = new Date().getFullYear();
const profilePicture = "images/20221109_183304.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('20221109_183304');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('scr', profilePicture);
imageElement.setAttribute('alt', profilePicture) = `Profile image of ${fullName}`;

/* Step 5 - Array */
let favoriteFood = ['Spinach', 'Carrots', 'Chicken', 'Couscous', 'Butternut'];
for (let i = 0; i < favoriteFood.length; i++) {
    console.log(favoriteFood[i]);
  }
  favoriteFoods.forEach(function(score) {
    console.log(score);
  });





// favoriteFood.push('Green Apples')
// console.log(favoriteFood) //new value is [1,2,3,4,5,6]
// favoriteFood.shift()
// console.log(favoriteFood) //new value is [2,3,4,5,6]









