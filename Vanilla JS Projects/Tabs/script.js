const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const history = document.querySelector(".history");
const vision = document.querySelector(".vision");
const goals = document.querySelector(".goals");

history.style.display = "inline-block";
vision.style.display = "none";
goals.style.display = "none";

btn1.addEventListener("click", () => {
  history.style.display = "inline-block";
  vision.style.display = "none";
  goals.style.display = "none";
});

btn2.addEventListener("click", () => {
  history.style.display = "none";
  vision.style.display = "inline-block";
  goals.style.display = "none";
});

btn3.addEventListener("click", () => {
  history.style.display = "none";
  vision.style.display = "none";
  goals.style.display = "inline-block";
});
