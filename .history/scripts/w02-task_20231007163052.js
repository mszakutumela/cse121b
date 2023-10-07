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

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('scr', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

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
// 3. Declare and instantiate a variable to hold another single favorite food item. 
let anotherSingleFood = ['Green Apples'];
// 4. Add the value stored in this new variable to your favorite food array.
favoriteFoods.push('Green Apples');
// 5. Append the new array values onto the displayed content of the HTML element 
// with the id of food using a += operator and a <br> (line break character) to provide a line break as shown in Figure 2.
foodElement.innerHTML += `<br>${favoriteFoods}`;
// 6. Remove the first element in the favorite food array.
// 7. Again, append the array output showing the modified array, using a line break as shown in step 5.5.
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
// 8. Remove the last element in the favorite food array.
// 9. Append the array output with this final modified favorite foods array. Hint: Step 5.5.
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;














