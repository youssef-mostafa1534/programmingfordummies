const sttBtn = document.querySelector(".stt");

const observer = new IntersectionObserver((entries) => {
    entries.forEach ((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        // else {
        //     entry.target.classList.remove("show");
        // }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function updateProgressBar(){
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
    document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
  }

window.addEventListener("scroll", () => {
    updateProgressBar()
    if (window.scrollY>1750) {
        sttBtn.classList.add("active");
    }
    else {
        sttBtn.classList.remove("active");
    }
});