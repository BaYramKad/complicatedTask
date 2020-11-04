

let button = document.getElementById("change"),
    body = document.querySelector("body"),
    h1 = document.querySelector("h1");

function generateColor() {
    let color = '#' + Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = color;
    h1.textContent = color;
    body.style.transition = "1s";
    body.style.color = "white";
}
button.addEventListener("click", generateColor);