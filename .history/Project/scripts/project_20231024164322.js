/* Project */

// Short Quiz Section

function add(Number1, Number2, Number3) {
    return Number1 + Number2 + Number3;
}
function addTemples() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    let addNumber3 = Number(document.querySelector("#add3").value);
    document.querySelector("#sum").value = add(addNumber1, addQ2, addQ3);
}
document.querySelector("#addTemples").addEventListener("click", addTemples);