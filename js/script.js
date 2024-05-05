const inp = document.querySelector("input");
const btn = document.querySelector("button");
const dialog = document.querySelector("p");

function checkPass() {
    pass = inp.value
    if (pass == "1234") {
        window.location.href = "http://youssef-mostafa1534.github.io/programmingfordummies/python.html";
    }
    else {
        dialog.innerText = 
    }
}

btn.addEventListener("click", checkPass);