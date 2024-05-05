const inp = document.querySelector("input");
const btn = document.querySelector("button");
const dialog = document.querySelector("p");

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
    // Check if cookie was successfully set
    const success = getCookie(name) === value;
    console.log(`Cookie "${name}" set successfully: ${success}`);
}

function hashPassword(password) {
    return sha256(password); // Assuming you are using js-sha256 library
}

function checkPass() {
    const pass = inp.value;
    const hashedPass = hashPassword(pass); // Hash the entered password
    const hashedCorrectPass = "f5d838dd5c88aa140a399308d299303562c33619bab682a95d4c5ffabb6d38ce"; // Precomputed hash of "1234"
    if (hashedPass === hashedCorrectPass) {
        setCookie("passCorrect", true, 1); // Set cookie to true for 1 day
        window.location.href = "html/home.html";
    } else {
        dialog.style.display = "block";
    }
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName.trim() === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

function checkCookie() {
    const passCorrect = getCookie("passCorrect");
    if (passCorrect == "true") {
        window.location.href = "html/home.html"; // Redirect to login page
    }
}

// Call the function when the page loads
window.addEventListener("load", checkCookie);

btn.addEventListener("click", checkPass);