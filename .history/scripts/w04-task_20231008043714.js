/* LESSON 3 - Programming Tasks */

/* Profile Object  */

// 1. Declare a new object literal variable named myProfile to hold 
// information about yourself and assign an empty object to the variable.
// 2. Add a property to this object literal named name and set its value to 
// be your name as a string.
// 3. Add a property named photo. Set its value to be an image's path and name 
// (one used in Programming Task 2) as a string.
// 4. Add a property named favoriteFoods. Set its value to be an array of your 
// favorite foods as strings.
// 5. Add a property named hobbies. Set its value to be an array of your hobbies as strings.

let myProfile = {
    name: "Ayanda Ndlovu",
    photo: "images/20221109_183304.jpg",
    favoriteFoods: [
        "Spinach", 
        "Carrots", 
        "Chicken", 
        "Couscous", 
        "Butternut", 
        "Green Apples"
    ],
    hobbies: [
        "Netball",
        "Learning new skills",
    ],
/* Populate Profile Object with placesLive objects */

// 6. Add a property named placesLived. Set its value to be an empty array.
    placesLived: [],
};

// 7. Using code outside of the myProfile definition, add an item to the placesLived 
// array where this new item itself is object with two properties: place and length 
// and for each of these properties, add appropriate values as strings.
myProfile.placesLived.push(
    {
        place: "Newcastle, KwaZulu Natal", 
        length: "10 years"
    }
);
// 8. Add additional object literals with appropriate values to the placesLived array 
// for each place you have lived.
myProfile.placesLived.push(
    {
        place: "Stellenbosch, Western Cape", 
        length: "9 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Pretoria, Gauteng", 
        length: "9 years"
    }
);

/* DOM Manipulation - Output */

/* Name */

// 1. Assign the value of the name property of the myProfile object to the HTML element 
// with an ID of name.
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

// 2. Assign the value of the photo property as the src attribute of the 
// HTML <img> with an ID of photo.
document.getElementById('photo').src = myProfile.photo;
// 3. Assign the value of the name property as the alt attribute of 
// the HTML <img> with an ID of photo.
document.getElementById('photo').alt = myProfile.photo;

/* Favorite Foods List*/

// 4. For each favorite food in the favoriteFoods property,
// 4.1 create an HTML <li> element (💡createElement),
myProfile.favoriteFoods.forEach(food => {
// 4.2 place the value of the favoriteFoods array element into 
// the textContent of this new li element, and then    
    let li = document.createElement('li');
    li.textContent = food;
// 4.3 append this new <li> element with content as a child of 
// the HTML <ul> element with an ID of favorite-foods.
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

// 5. Repeat the previous process of creating a list of items for 
// each hobby in the hobbies property of the object and appending each 
// item to the HTML <ul> element with an ID of hobbies.
myProfile.favoriteFoods.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

6. For each object in the placesLived property:
Create an HTML <dt> element and put its place property in the <dt> element.
Create an HTML <dd> element and put its length property in the <dd> element


