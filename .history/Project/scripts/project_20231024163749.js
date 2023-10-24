/* Project */

// Short Quiz Section

function add(Q1, Q2, Q3) {
    return Q1 + Q2 + Q3;
}
function addTemples() {
    let addQ1 = Number(document.querySelector("#add1").value);
    let addQ2 = Number(document.querySelector("#add2").value);
    let addQ3 = Number(document.querySelector("#add3").value);
    document.querySelector("#sum").value = add(addQ1, addQ2, addQ3);
}
document.querySelector("#addTemples").addEventListener("click", addTemples);