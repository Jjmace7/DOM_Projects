let show = document.getElementById("display");
let btns = Array.from(document.getElementsByClassName("btn"))

btns.map((btn) => {
    btn.addEventListener("click", value);
})

function value (e) {
    let key = e.target.innerText;

    if(key === "A/c") {
        show.innerText = "0";
    }
    else if (key === "del") {
        show.innerText = show.innerText.slice(0, -1);
    }
    else if (key === "%") {
        show.innerText = show.innerText / 100;
    }
    else if (key === "=") {
        show.innerText = eval(show.innerText);
    }
    else if (key === "sin") {
        show.innerText = Math.sin(show.innerText);
        if (show.innerText > 0.5) {
            show.innerText = "1";
        }
    }
    else if (key === "cos") {
        show.innerText = Math.cos(show.innerText);
    }
    else if (key === "tan") {
        show.innerText = Math.tan(show.innerText);
    }
    else if (key === "e") {
        show.innerText = Math.exp(show.innerText);
    }
    else if (key === "√") {
        show.innerText = Math.sqrt(show.innerText);
    }
    else if (key === "^") {
        show.innerText = Math.pow(show.innerText , 2);
    }
    else if (key === "log") {
        show.innerText = Math.log(show.innerText);
    }
    else if (key === "1/x") {
        show.innerText = eval(1/show.innerText);
    }
    else if (key === "rad") {
        show.innerText = show.innerText * 3.14 / 180;
    }
    else if (key === "!") {
        let i = display.innerText;
        let fact = 1;
        while (i > 0) {
            fact *= i;
        }
        display.innerText = fact;
    }
    else if (key === "π") {
        show.innerText *= 3.14;
    }
    else {
        show.innerText += key;
    }
}