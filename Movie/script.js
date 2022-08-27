const btn = document.getElementById("create-btn");
// const popUp = document.getElementsByClassName("pop-up");
const popUp = document.querySelector(".pop-up");
const main = document.querySelector("main");
const cancelBtn = document.querySelector(".cancel");
const addBtn = document.querySelector("#add-btn");
const body = document.querySelector("body");
const errMsg = document.querySelector(".error-msg");

popUp.style.display = "none";

btn.addEventListener("click", () => {
  popUp.style.display = "block";
  resetForm();
});

cancelBtn.addEventListener("click", () => {
  popUp.style.display = "none";
});

const movieContainer = document.querySelector(".movie-cont");
let arr = [];

let inputName = document.getElementById("input-name");
let inputLink = document.getElementById("input-link");
let inputRating = document.getElementById("input-rating");
let inputCategory = document.getElementById("input-category");
let inputTrailer = document.getElementById("input-trailer");
let inputActor = document.getElementById("input-actor");
let inputDirector = document.getElementById("input-director");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  popUp.style.display = "none";

  let nameValue = inputName.value;
  let linkValue = inputLink.value;
  let ratingValue = inputRating.value;
  let categoryValue = inputCategory.value;
  let trailerValue = inputTrailer.value;
  let actorValue = inputActor.value;
  let directorValue = inputDirector.value;


  let obj = {
    name: nameValue,
    link: linkValue,
    rating: ratingValue,
    category: categoryValue,
    trailer: trailerValue,
    actor: actorValue,
    director: directorValue,
  };

  if(!(nameValue && linkValue && ratingValue && categoryValue && trailerValue && actorValue && directorValue)){
    popUp.style.display = "block";
    errMsg.textContent = "Empty Input field(s)";
  setTimeout(()=>{
  errMsg.textContent = "";
  },1500)
} else {
  arr.push(obj);
  showData(arr);
}
});

const resetForm = () => {
  inputName.value="";
  inputLink.value="";
  inputRating.value="";
  inputCategory.value = "";
  inputTrailer.value="";
  inputActor.value = "";
  inputDirector.value = "";
}


function showData(newData) {
  movieContainer.innerHTML = null;
  newData.map((d) => {
    let div = document.createElement("div");
    div.setAttribute("class", "movie-item");

    let img = document.createElement("img");
    img.setAttribute("id", "img");
    img.setAttribute("src", d.link);

    let movieName = document.createElement("input");
    movieName.setAttribute("id", "movie-name");
    movieName.setAttribute("type", "text");
    movieName.value = d.name;

    let trailerS = document.createElement("input");
    trailerS.setAttribute("id", "movie-trailer");
    trailerS.value = d.trailer;
    trailerS.style.display = "none";

    let playBtn = document.createElement("button");
    playBtn.setAttribute("type", "button");
    playBtn.setAttribute("id", "play-btn");
    playBtn.innerText = "Watch Trailer";

    playBtn.addEventListener("click", () => {
      window.open(d.trailer);
    });

    let ratingLabel = document.createElement("label");
    ratingLabel.innerHTML = "IMDb ratings:";
    let ratingInput = document.createElement("input");
    ratingInput.setAttribute("type", "number");
    ratingInput.setAttribute("id", "imdb-ratings");
    ratingInput.value = d.rating;

    let categoryLabel = document.createElement("label");
    categoryLabel.innerHTML = "Category:";
    let categoryInput = document.createElement("input");
    categoryInput.setAttribute("type", "text");
    categoryInput.setAttribute("id", "movie-category");
    categoryInput.value = d.category;

    let actorLabel = document.createElement("label");
    actorLabel.innerHTML = "Actor:";
    let actorInput = document.createElement("input");
    actorInput.setAttribute("type", "text");
    actorInput.setAttribute("id", "movie-actor");
    actorInput.value = d.actor;

    let directorLabel = document.createElement("label");
    directorLabel.innerHTML = "Director:";
    let directorInput = document.createElement("input");
    directorInput.setAttribute("type", "text");
    directorInput.setAttribute("id", "movie-director");
    directorInput.value = d.director;

    div.append(img);
    div.append(movieName);
    div.append(trailerS);
    div.append(playBtn);
    div.append(ratingLabel);
    div.append(ratingInput);
    div.append(categoryLabel);
    div.append(categoryInput);
    div.append(actorLabel);
    div.append(actorInput);
    div.append(directorLabel);
    div.append(directorInput);
    movieContainer.append(div);
  });
}

const filter = document.getElementById("filter");
function filterByActor() {
  let filteredActor = arr.filter((ab) => {
    return ab.actor == filter.value;
  })
  filter.value = "";
  showData(filteredActor);
}


function filterByDirector() {
  let filteredDirector = arr.filter((cd) => {
    return cd.director == filter.value;
  })
  filter.value = "";
  showData(filteredDirector);
}

function filterByCategory() {
  let filteredCategory = arr.filter((ef) => {
    return ef.category == filter.value;
  })
  filter.value = "";
  showData(filteredCategory);
}

function sortByImdb() {
  let sortedMovies = arr.sort((a,b) => {
    return a.rating - b.rating;
  });
  showData(sortedMovies);
}

function allMovies() {
  let alMovies = arr.slice(0);
  showData(alMovies);
}