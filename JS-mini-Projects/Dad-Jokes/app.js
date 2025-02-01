const showHere = document.querySelector(".content");
const getJoke = document.querySelector(".get-joke"); 

getJoke.addEventListener("click", joke);

async function joke() {
    let config = {
        headers: {
            Accept: "application/json",
        },
    };
    
    let a = await fetch("https://icanhazdadjoke.com/", config);
    let b = await a.json();
    showHere.textContent = b.joke;
}


// https://icanhazdadjoke.com/