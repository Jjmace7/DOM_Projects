const button = document.querySelector("button");
const firstDiv = document.querySelector(".one");
const secondDiv = document.querySelector(".two");
const cancel = document.querySelector(".cancel");

secondDiv.style.display = "none";

button.addEventListener("click", function () {
  firstDiv.style.display = "none";
  secondDiv.style.display = "block";
});

cancel.addEventListener("click", function () {
  firstDiv.style.display = "block";
  secondDiv.style.display = "none";
});
