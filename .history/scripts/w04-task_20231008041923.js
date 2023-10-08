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
    ]
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
document.getElementById('photo').src = myp.photo;

/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


