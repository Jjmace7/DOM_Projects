const divs = document.querySelectorAll(".inner");

for(let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function() {
        this.classList.toggle("active");
    })
}
