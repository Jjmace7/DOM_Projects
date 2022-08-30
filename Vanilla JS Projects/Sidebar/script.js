const cancel = document.querySelector(".cancel");
const bars = document.querySelector(".bars");
const aside = document.querySelector(".aside");

cancel.addEventListener("click", () => {
  aside.style.visibility = "hidden";
});

bars.addEventListener("click", () => {
  if (aside.style.visibility === "visible") {
    aside.style.visibility = "hidden";
  } else {
    aside.style.visibility = "visible";
  }
});
