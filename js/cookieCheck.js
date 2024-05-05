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
    if (passCorrect !== "true") {
        window.location.href = "../index.html"; // Redirect to login page
    }
}

// Call the function when the page loads
window.addEventListener("load", checkCookie);