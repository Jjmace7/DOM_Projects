const all = document.querySelector('.all');
const brkfast = document.querySelector('.brkfast');
const lunch = document.querySelector('.lunch');
const shakes = document.querySelector('.shakes');
const brkfastImg = document.querySelector('.breakfast-img');
const lunchImg = document.querySelector('.lunch-img');
const shakesImg = document.querySelector('.shakes-img');
// const img = document.querySelectorAll('img');

all.addEventListener("click", function () {
    brkfastImg.style.display = "inline-block";
    lunchImg.style.display = "inline-block";
    shakesImg.style.display = "inline-block";
})

brkfast.addEventListener("click", function () {
    brkfastImg.style.display = "inline-block";
    lunchImg.style.display = "none";
    shakesImg.style.display = "none";
})

lunch.addEventListener("click", function () {
    brkfastImg.style.display = "none";
    lunchImg.style.display = "inline-block";
    shakesImg.style.display = "none";
})

shakes.addEventListener("click", function () {
    brkfastImg.style.display = "none";
    lunchImg.style.display = "none";
    shakesImg.style.display = "inline-block";
})