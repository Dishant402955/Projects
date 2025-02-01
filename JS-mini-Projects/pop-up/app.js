const show = document.querySelector(".show");
const hide = document.querySelector(".hide");
const popUp = document.querySelector(".pop-up");

show.addEventListener("click", () => popUp.classList.add("show-popup"));
hide.addEventListener("click", () => popUp.classList.remove("show-popup"));

window.addEventListener("click", (e) => {
    if ((e.target !== popUp) && (e.target !== show)){
        popUp.classList.remove("show-popup");
    }
});
