/* Operational Temples Filter */

/* Temples Object  */

let opTemples = {
    templeName: [],
    photo: [],
    milestones: []
};

opTemples.templeName.push()

// 7. Using code outside of the myProfile definition, add an item to the placesLived 
// array where this new item itself is object with two properties: place and length 
// and for each of these properties, add appropriate values as strings.
myProfile.placesLived.push(
    {
        place: "Newcastle, KwaZulu Natal, South Africa", 
        length: "10 years"
    }
);
// 8. Add additional object literals with appropriate values to the placesLived array 
// for each place you have lived.
myProfile.placesLived.push(
    {
        place: "Stellenbosch, Western Cape, South Africa ", 
        length: "9 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Pretoria, Gauteng, South Africa", 
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
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

// 6. For each object in the placesLived property:
// 6.1 Create an HTML <dt> element and put its place property in the <dt> element.
// 6.2 Create an HTML <dd> element and put its length property in the <dd> element
myProfile.placesLived.forEach((item) => {
    let placeLived = document.getElementById('places-lived');
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.innerHTML = item.place;
    dd.innerHTML = item.length;
// 7. Append the HTML <dt> and <dd> elements created above to the 
// HTML <dl> element with an ID of places-lived.
    placeLived.append(dt, dd);
});


