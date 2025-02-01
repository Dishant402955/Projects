const showCount = document.querySelector(".count");
const increment = document.querySelector(".increment");
const save = document.querySelector(".save");
const savedEntries = document.querySelector(".saved-entries");

let count = 0;

increment.addEventListener("click", () => {
    count += 1;
    showCount.textContent = count;
});

let entries = "";

save.addEventListener("click", () => {
    if (entries.length) {
        entries += " , ";
    }
    entries += count;
    savedEntries.textContent = entries;
    count = 0;
    showCount.textContent = count;
});