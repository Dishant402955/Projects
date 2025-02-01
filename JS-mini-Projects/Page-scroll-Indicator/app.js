const indicator = document.querySelector(".scroll-indicator .progress");

let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener("scroll", indicate);

function indicate() {
    let scrollTop = document.documentElement.scrollTop;
    let scrolled = (scrollTop / scrollHeight) * 100;
    indicator.style.width = `${scrolled}%`; 
}