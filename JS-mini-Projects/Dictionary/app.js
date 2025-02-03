const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector(".result");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    const word = document.querySelector("#word").value;
    fetch(`${url}${word}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            console.log("hello");
    
            result.innerHTML = `<h3 class="word">${data[0].word}</h3>
                                <h6 class="partofSpeech">( ${data[0].meanings[0].partOfSpeech} )</h6>
                                <p class="definition">Definition : ${data[0].meanings[0].definitions[0].definition}</p>`;
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        })
})