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
let image = document.getElementsByTagName('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
let imageElement = image[0].setAttribute('scr', profilePicture)
image[0].setAttribute('alt', `${}` );
image[0].setAttribute('alt', profilePicture) = `Profile image of ${fullName}`;

/* Step 5 - Array */
let favoriteFoods = ['Spinach', 'Carrots', 'Chicken', 'Couscous', 'Butternut'];
foodElement.innerHTML = `${favoriteFoods}`;
let anotherSingleFood = ['Green Apples'];
favoriteFoods.push('Green Apples');
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop(0);
foodElement.innerHTML += `<br>${favoriteFoods.pop(0)}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.pop()}`;




favoriteFoods.forEach(function(favoriteFood) {
    favoriteFood.log(score);
  });




// favoriteFood.push('Green Apples')
// console.log(favoriteFood) //new value is [1,2,3,4,5,6]
// favoriteFood.shift()
// console.log(favoriteFood) //new value is [2,3,4,5,6]









