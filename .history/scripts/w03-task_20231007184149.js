/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

// 1. Using function declaration, define a function named add that 
// takes two arguments and assigns them to the parameters number1 and number2.
// 2. In the function body, return the sum of the parameters number1 and number2.
function add (number1, number2) {
    // function body
    return number1 + number2;
}
// 3. Using a function declaration, define another function named addNumbers that 
// gets the values of two HTML form controls with IDs of add1 and add2.
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}



/* Function Expression - Subtract Numbers */


/* Arrow Function - Multiply Numbers */


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
