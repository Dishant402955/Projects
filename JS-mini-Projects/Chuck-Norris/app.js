const showHere = document.querySelector(".content");
const getjoke = document.querySelector(".getJoke");

getjoke.addEventListener("click", () => {
    const ajax = new XMLHttpRequest();
    const url = "https://api.chucknorris.io/jokes/random";
    ajax.open('GET', url, true);

    ajax.onreadystatechange = () => {
        if (ajax.status === 200 && ajax.readyState === 4) {
            let data = JSON.parse(ajax.responseText);
            showHere.textContent = `${data.value}`;
        } else {
            ajax.onerror = () => {
                showHere.textContent = `Something Went Wrong !!`;
            }
        } 
    }

    ajax.send();
});

// https://api.chucknorris.io/jokes/random
