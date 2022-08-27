document.querySelector(".class1").innerText = "Amit Kumar";

document.querySelector(".class2").innerText =
  "My name is Amit and I have shifted my career from building the buildings(civil engg) to building the logic.";

document.querySelector(".class3").style.color = "red";

let divs = document.getElementsByClassName("divs");
for (let i = 0; i < divs.length; i++) {
  divs[i].style.border = "1px solid black";
  divs[0].innerText = "Fourth";
  divs[1].innerText = "Fifth";
  divs[2].innerText = "Sixth";
}

document.querySelector("#id1").append("Aircampus");

document.querySelectorAll("div")[8].innerText +=
  '<div class="new_htlm"><p>This is my first assignment</p></div>';

document.querySelectorAll("div")[9].innerHTML = "My Experience with AirCampus";
document.querySelectorAll("div")[9].style.textDecoration = "underline";
document.querySelectorAll("div")[9].style.fontWeight = "bold";
document.querySelectorAll("div")[9].style.fontSize = "32px";
document.querySelectorAll("div")[9].style.color = "#495C83";

document.querySelector("p").innerText =
  "AirCampus is not an institution, its an emotion. It is going to be India's first bagless institution. You can learn Web Development with top-notch mentors here.";
