const doll = document.querySelector("#doll");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    if(doll.src.match("Doll")){
        doll.src = "./Annabelle.jpg"
        btn.innerText = 'Help!!!';
        btn.style.backgroundColor = "red";
    }
    else {
        doll.src = "./Doll.jpg"
        btn.innerText = 'Scare me';
        btn.style.backgroundColor = "initial";
    }
})