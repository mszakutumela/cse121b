/* Project */

// Short Quiz Section

function add(Q1, Q2, Q3) {
    return Q1 + Q2 + Q3;
}
function addTemples() {
    let addQ1 = Number(document.querySelector('#add1').value);
    let addQ2 = Number(document.querySelector('#add2').value);
    
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);