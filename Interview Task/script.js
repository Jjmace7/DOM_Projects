const task = document.querySelector("#task");
const body = document.querySelector("body");
const allDiv = document.querySelector(".allDiv");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");
const black = document.querySelector(".black");
const tick = document.querySelector(".tick");

task.addEventListener("click", function () {

  let mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "center");

  let textarea = document.createElement("textarea");
  textarea.setAttribute("type", "text");
  textarea.setAttribute("id", "input");
  textarea.setAttribute("placeholder", "Enter your task!");
  textarea.setAttribute("cols", "30");
  textarea.setAttribute("rows", "9");

  let btn = document.createElement("button");
  btn.setAttribute("id", "btn");
  btn.innerText = "Done";

  let innerDiv = document.createElement("div");
  innerDiv.setAttribute("id", "colors");

  let redDiv = document.createElement("div");
  redDiv.setAttribute("class", "red1");

  let yellowDiv = document.createElement("div");
  yellowDiv.setAttribute("class", "yellow1");

  let blueDiv = document.createElement("div");
  blueDiv.setAttribute("class", "blue1");

  let blackDiv = document.createElement("div");
  blackDiv.setAttribute("class", "black1");

  let cross = document.createElement("i");
  cross.setAttribute("class", "fa-solid fa-xmark cross");

  innerDiv.append(redDiv, yellowDiv, blueDiv, blackDiv);
  mainDiv.append(textarea, btn, innerDiv, cross);
  body.append(mainDiv);

  cross.addEventListener("click", function () {
    this.parentElement.remove();
  });

  let div1 = document.createElement("div");

  redDiv.addEventListener("click", function () {
    div1.style.borderTop = "15px solid red";
    this.style.border = "3px solid seagreen";
  });

  yellowDiv.addEventListener("click", function () {
    div1.style.borderTop = "15px solid yellow";
    this.style.border = "3px solid seagreen";
  });

  blueDiv.addEventListener("click", function () {
    div1.style.borderTop = "15px solid blue";
    this.style.border = "3px solid seagreen";
  });

  blackDiv.addEventListener("click", function () {
    div1.style.borderTop = "15px solid black";
    this.style.border = "3px solid seagreen";
  });

  btn.addEventListener("click", function () {
    if (textarea.value.length > 0) {
      let todoList = document.createElement("div");
      todoList.setAttribute("class", "todoList");

      div1.setAttribute("class", "div1");

      let input1 = document.createElement("input");
      input1.setAttribute("type", "text");
      input1.setAttribute("id", "input");

      let icons = document.createElement("div");
      icons.setAttribute("class", "icons");

      let leftIcons = document.createElement("div");
      leftIcons.setAttribute("class", "leftIcons");

      let check = document.createElement("i");
      check.setAttribute("class", "fa-solid fa-check check");
      check.style.display = "none";

      let del = document.createElement("i");
      del.setAttribute("class", "fa-solid fa-trash-can del");
      del.style.display = "none";

      let edit = document.createElement("i");
      edit.setAttribute("class", "fa-solid fa-pen edit");
      edit.style.display = "none";

      let coloredDiv = document.createElement("div");
      coloredDiv.setAttribute("class", "coloredDiv");
      coloredDiv.style.display = "none";
      coloredDiv.style.backgroundColor = "red";

      let rightIcons = document.createElement("div");
      rightIcons.setAttribute("class", "rightIcons");

      let lock = document.createElement("i");
      lock.setAttribute("class", "fa-solid fa-lock lock");

      let unlock = document.createElement("i");
      unlock.setAttribute("class", "fa-solid fa-lock-open unlock");

      leftIcons.append(check, del, edit, coloredDiv);
      rightIcons.append(lock);

      icons.append(leftIcons, rightIcons);

      div1.append(input1, icons);

      todoList.append(div1);

      body.append(todoList);

      this.parentElement.remove();

      input1.value = textarea.value;
      input1.setAttribute("readonly", "readonly");

      lock.addEventListener("click", function () {
        this.replaceWith(unlock);
        check.style.display = "inline-block";
        del.style.display = "inline-block";
        edit.style.display = "inline-block";
        coloredDiv.style.display = "inline-block";
      });

      unlock.addEventListener("click", function () {
        this.replaceWith(lock);
        check.style.display = "none";
        del.style.display = "none";
        edit.style.display = "none";
        coloredDiv.style.display = "none";
      });

      del.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.remove();
      });

      edit.addEventListener("click", function () {
        if(this.style.color === "grey") {
          input1.removeAttribute("readonly");
          this.style.color = "pink";
        } else {
          input1.setAttribute("readonly", "readonly");
          this.style.color = "grey";
        }
      });

      check.addEventListener("click", function () {
        div1.style.display = "none";
        this.style.color = "blue";
      });

      tick.addEventListener("click", function () {
        // if (check.style.color !== "blue") {
        //   div1.style.display = "none";
        // } else {
        //   div1.style.display = "inline-block";
        // }
        if (check.style.color === "blue") {
          div1.style.display = "inline-block";
        } else {
          div1.style.display = "none";
        }
        check.style.display = "none";
        del.style.display = "none";
        edit.style.display = "none";
        coloredDiv.style.display = "none";
        unlock.replaceWith(lock);
      });

      coloredDiv.addEventListener("click", function () {
        if (this.style.backgroundColor === "red") {
          this.style.backgroundColor = "yellow";
          div1.style.borderTop = "15px solid yellow";
        } else if (this.style.backgroundColor === "yellow") {
          this.style.backgroundColor = "blue";
          div1.style.borderTop = "15px solid blue";
        } else if (this.style.backgroundColor === "blue") {
          this.style.backgroundColor = "black";
          div1.style.borderTop = "15px solid black";
        } else {
          this.style.backgroundColor = "red";
          div1.style.borderTop = "15px solid red";
        }
      });

      red.addEventListener("click", function () {
        div1.style.display = "inline-block";
        if (
          div1.style.borderTop !== "15px solid red" ||
          check.style.color === "blue"
        ) {
          div1.style.display = "none";
        }
        check.style.display = "none";
        del.style.display = "none";
        edit.style.display = "none";
        coloredDiv.style.display = "none";
        unlock.replaceWith(lock);
      });

      yellow.addEventListener("click", function () {
        div1.style.display = "inline-block";
        if (
          div1.style.borderTop !== "15px solid yellow" ||
          check.style.color === "blue"
        ) {
          div1.style.display = "none";
        }
        check.style.display = "none";
        del.style.display = "none";
        edit.style.display = "none";
        coloredDiv.style.display = "none";
        unlock.replaceWith(lock);
      });

      blue.addEventListener("click", function () {
        div1.style.display = "inline-block";
        if (
          div1.style.borderTop !== "15px solid blue" ||
          check.style.color === "blue"
        ) {
          div1.style.display = "none";
        }
        check.style.display = "none";
        del.style.display = "none";
        edit.style.display = "none";
        coloredDiv.style.display = "none";
        unlock.replaceWith(lock);
      });

      black.addEventListener("click", function () {
        div1.style.display = "inline-block";
        if (
          div1.style.borderTop !== "15px solid black" ||
          check.style.color === "blue"
        ) {
          div1.style.display = "none";
        }
        check.style.display = "none";
        del.style.display = "none";
        edit.style.display = "none";
        coloredDiv.style.display = "none";
        unlock.replaceWith(lock);
      });

      allDiv.addEventListener("click", function () {
        div1.style.display = "inline-block";
        this.style.border = "2px solid chocolate";
        this.style.padding = "2px 5px";
        check.style.display = "none";
        del.style.display = "none";
        edit.style.display = "none";
        coloredDiv.style.display = "none";
        unlock.replaceWith(lock);
      });
    }
  });
});
