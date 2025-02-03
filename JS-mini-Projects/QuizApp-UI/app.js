const start = document.querySelector(".start-btn");
const mainScreen = document.querySelector(".main-display");
const next = document.querySelector(".next-btn");
const score = document.querySelector(".score-cont");
const restart = document.querySelector(".restart-btn");

start.addEventListener("click", () => {
    start.classList.add("hide");
    mainScreen.classList.remove("hide");
});

next.addEventListener("click", () => {
    mainScreen.classList.add("hide");
    score.classList.remove("hide");
})

restart.addEventListener("click", () => {
    score.classList.add("hide");
    mainScreen.classList.remove("hide");
})