const input = document.getElementById("input");
const btn = document.getElementById("button");
const cont = document.querySelector(".infoContainer");
const info2 = document.querySelector(".info2");

btn.addEventListener("click", function () {
  cont.innerHTML = null;
  fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let result = `
            <div class="innerDiv">
            <img id="img" src="${data[i].show.image.original}" />
            <h1>Name : ${data[i].show.name}</h1>
            <h2>Start Date : ${data[i].show.premiered}</h2>
            <h2>Language : ${data[i].show.language}</h2>
            <button id="show-btn">Show Details</button>
            </div>
            `;

        cont.innerHTML += result;
      }
      console.log(data);
      // let innerDiv = document.querySelector(".innerDiv");
      
      let showBtn = document.querySelector("#show-btn");
      showBtn.addEventListener("click", function () {
        fetch(`https://api.tvmaze.com/shows/1?embed[]=seasons&embed[]=cast`)
          .then((res) => res.json())
          .then((datas) => {
            cont.style.display = "none";
            let result2 = `
                <div>
                <img id="img" src="${datas.image.medium}" />
                <h1>Name : ${datas.name}</h1>
                <h1>Genres : ${datas.genres}</h1>
                <h1>Language : ${datas.language}</h1>
                <h1>Status : ${datas.status}</h1>
                <h2>Summary : ${datas.summary}</h2>
                <h2>Seasons : ${datas.seasons}</h2>
                </div>
                `;
            info2.innerHTML = result2;
            console.log(datas)
          });
      });
    });
});
