
let password1El= document.getElementById("password1-el");
let password2El= document.getElementById("password2-el");


function randomOne() {
    let r = (Math.random() + 1).toString(36).substring(2);
    password1El.textContent = r;
}

function randomTwo() {
    let r = (Math.random() + 1).toString(36).substring(2);
    password2El.textContent = r;
}


