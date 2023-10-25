/* Project */

// Short Quiz Section

function add(Number1, Number2, Number3) {
    return Number1 + Number2 + Number3;
}

function addTemples() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    let addNumber3 = Number(document.querySelector('#add3').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2, addNumber3);
}
document.querySelector('#addTemples').addEventListener('click', addTemples);

// For button: Check if the Total Number of Temples is correct or incorrect? (Code not working)
const answer = (addTemples) => {
    return addTemples;
}
const checkAnswer = () => {
    let correct_answer = parseInt(document.querySelector('#answer').value);
    let wrong_answer = parseInt(document.querySelector('#answer').value);
    if(answer === correct_answer) {
        let result = print("Correct! Well done!");
        document.querySelector('#answer').value = result;
    if(answer === wrong_answer) {
        let result = print("Incorrect! Try again!");
        document.querySelector('#answer').value = result;
    }      
    }  
}   
document.querySelector('#checkAnswer').addEventListener('click', checkAnswer);        

// Temples of the Church of Jesus Christ of Latter-Day Saints in Africa
// temple JSON file: https://byui-cse.github.io/cse121b-ww-course/resources/temples.json


