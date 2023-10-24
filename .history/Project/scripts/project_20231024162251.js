/* Project */

// Short Quiz Section

function add(number1, number2) {
    return number1 + number2;
}
function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
   
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
// 5. Add a "click" event listener to the HTML button with an ID of addNumbers 
// that calls the addNumbers function. This line of code is NOT located inside 
// a function. Why❔
document.querySelector('#addNumbers').addEventListener('click', addNumbers);