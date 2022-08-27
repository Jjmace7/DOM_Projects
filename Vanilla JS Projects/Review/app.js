const profile = document.querySelector(".profile");
const div1 = document.querySelector(".div1");
const div2 = document.querySelector(".div2");
const div3 = document.querySelector(".div3");
const div4 = document.querySelector(".div4");
const container = document.querySelector(".container");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

div1.style.display = "inline-block";
div2.style.display = "none";
div3.style.display = "none";
div4.style.display = "none";
let count1 = 0;

btn1.addEventListener("click", () => {
  if (count1 === 0) {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "inline-block";
    count1++;
  }
  else if (count1 === 1) {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "inline-block";
    div4.style.display = "none";
    count1++;
  }
  else if (count1 === 2) {
    div1.style.display = "none";
    div2.style.display = "inline-block";
    div3.style.display = "none";
    div4.style.display = "none";
    count1++;
  }
  else if (count1 === 3) {
    div1.style.display = "inline-block";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
    count1++;
  }
  if (count1 === 4) {
    count1 = 0;
  }
});

let count2 = 0;

btn2.addEventListener("click", () => {
  if (count2 === 0) {
    div1.style.display = "none";
    div2.style.display = "inline-block";
    div3.style.display = "none";
    div4.style.display = "none";
    count2++;
  }
  else if (count2 === 1) {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "inline-block";
    div4.style.display = "none";
    count2++;
  }
  else if (count2 === 2) {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "inline-block";
    count2++;
  }
  else if (count2 === 3) {
    div1.style.display = "inline-block";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
    count2++;
  }
  if (count2 === 4) {
    count2 = 0;
  }
})


btn3.addEventListener("click", () => {
  let random = Math.floor(Math.random()* 10);
  console.log(random);
})