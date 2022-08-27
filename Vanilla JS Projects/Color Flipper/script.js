const input = document.querySelector("#input");
const button = document.querySelector("#btn");

button.addEventListener("click", (e) => {
    e.preventDefault();
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;
  input.value = `${"Background Color :"} ${randomCode}`;
});
