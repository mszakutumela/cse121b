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
    return factor1 * factor2;
    };
const multiplyNumbers = () => {
    let factor1 = parseInt(document.querySelector('#factor1').value);
    let factor2 = parseInt(document.querySelector('#factor2').value);
    let result = multiply(factor1, factor2);
    document.querySelector('#product').value = result;
    } 
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);  

/* Open Function Use - Divide Numbers */

// 1. Using any combination of function declaration types, repeat the items in Step 2 with 
// new functions named divide and divideNumbers and HTML form controls with IDs of dividend, 
// divisor, divideNumbers, and quotient.
const divide = (dividend, divisor) => {
    return dividend / divisor;
    };
const divideNumbers = () => {
    let dividend = parseInt(document.querySelector('#dividend').value);
    let divisor = parseInt(document.querySelector('#divisor').value);
    let result = divide(dividend, divisor);
    document.querySelector('#quotient').value = result;
    } 
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);  

/* Decision Structure */

// 1. Declare and instantiate a variable of to store the current date.
const currentDate = new Date();
// 2. Declare a variable to hold the current year.
let currentYear;
// 3. Using the variable declared in number 1, call the built-in getFullYear() 
// method/function and assign it to the variable declared in 2.
currentYear = currentDate.getFullYear();
// 4. Assign the current year variable to an HTML form element with an ID of year.
document.querySelector('#year').textContent = currentYear;

/* ARRAY METHODS - Functional Programming */

// 1. Declare and instantiate an array variable to hold the numbers 1 through 13.
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// 2. Assign the value of the array variable to the HTML element with an ID of array.
/* Output Source Array */
document.querySelector('#array').innerHTML = numbersArray;
// 3. Use the filter() array method to find all of the odd numbers 
// of the array variable and assign the result to the HTML element with an ID of odds.
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2);
// 4. Use the filter() array method to find all of the even numbers of the array variable and
// assign the result to the HTML element with an ID of evens.
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
// 5. Use the reduce() array method to sum the array variable elements and assign the result to 
// the HTML element with an ID of sumOfArray
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);
// 6. Use the map() array method to multiple each element in the array variable by 2 and assign the 
// result to the HTML element with an ID of multiplied.
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);
// 7. Use the map() and reduce() array methods to sum the array elements after multiplying each element 
// by two. Assign the result to the HTML element with an ID of sumOfMultiplied.
/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.map((number) => number * 2).reduce((sum, number) => sum + number);
