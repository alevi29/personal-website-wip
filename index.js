const navToggle = document.querySelector(".nav-toggle");
const progessBar = document.querySelector(".loading");

function loadComplete() {
    document.querySelector(".preloader").classList.add("loadingHidden");
}

updateProg(progessBar, 100);

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

function updateProg(progress, percent) {
    percent = Math.round(percent);
    var cur = 0;
    while (cur <= percent) {
        progress.querySelector(".loadingFill").style.width = `${cur}%`;
        progress.querySelector(".loadingText").innerHTML = `${cur}%`;
        cur++;
    }
}