/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

// 1. Using function declaration, define a function named add that 
// takes two arguments and assigns them to the parameters number1 and number2.
// 2. In the function body, return the sum of the parameters number1 and number2.
function add(number1, number2) {
    // function body
    return number1 + number2;
}
// 3. Using a function declaration, define another function named addNumbers that 
// gets the values of two HTML form controls with IDs of add1 and add2.
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
// 4. Next, in the addNumbers function, call the add function using 
// those two arguments and assign the return value to an HTML form element 
// with an ID of sum.    
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
// 5. Add a "click" event listener to the HTML button with an ID of addNumbers 
// that calls the addNumbers function. This line of code is NOT located inside 
// a function. Why❔
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

// 1. Using function expressions, repeat the items in Step 2 with new functions 
// named subtract and subtractNumbers and HTML form controls with IDs of subtract1, 
// subtract2, subtractNumbers, and difference.
function subtract(number1, number2) {
    // function body
    return number1 - number2;
}
function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

// 1. Using arrow functions, repeat the items in Step 2 with arrow functions named multiply 
// and multiplyNumbers and HTML form controls with IDs of factor1, factor2, multiplyNumbers, 
// and product.
const multiply = (factor1, factor2) => {
        return factor1 * factor2
        };

function multiplyNumbers() {
    let multiplyFactor1 = Number(document.querySelector('#multiply1').value);
    let multiplyFactor2 = Number(document.querySelector('#multiply2').value);
    document.querySelector('#product').value = subtract(multiplyFactor1, multiplyFactor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */



/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
