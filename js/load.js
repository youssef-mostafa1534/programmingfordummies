const loader = document.querySelector(".splash");
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.classList.add("splash-hidden");
    }, 4000);
});