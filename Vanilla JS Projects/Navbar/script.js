const container = document.querySelector(".container");
const heading = document.querySelector(".heading");
const icons = document.querySelector(".icons");
const bars = document.querySelector(".bars");
const dragdown = document.querySelector(".dragdown");

bars.addEventListener("click", () => {
    dragdown.style.display = "block";
})