const span = document.querySelector("#span");
const btn1 = document.querySelectorAll(".btn")[0];
const btn2 = document.querySelectorAll(".btn")[1];
const btn3 = document.querySelectorAll(".btn")[2];

let count = 0;

btn1.addEventListener("click", () => {
  count--;
  span.innerText = count;
  if (count < 0) {
    span.style.color = "red";
  }
});

btn2.addEventListener("click", () => {
  count = 0;
  span.innerText = count;
  if(count === 0) {
span.style.color = "yellow";
  }
});

btn3.addEventListener("click", () => {
  count++;
  span.innerText = count;
  if (count > 0) {
    span.style.color = "green";
  }
});
