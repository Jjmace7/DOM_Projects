const cityName = document.getElementById("weather-input");
const btn = document.getElementById("weather-btn");
// const body = document.querySelector("body");

// body.style.backgroundColor = `rgb(${scrollX}, ${scrollY}, ${scrollX - scrollY})`;

btn.addEventListener("click", function (name) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=3cd4cfffe5085d32d29293da02653a53`
  )
    .then((response) => response.json())
    .then((data) => {
      let result = `<div><h1>City : ${data.name}</h1>
        <h1>Temperature : ${Math.floor(data.main.temp - 273)} °C</h1>
        <h1>Pressure : ${data.main.pressure}</h1>
        <h1>Humidity : ${data.main.humidity}</h1>
        <h1>Longitude : ${data.coord.lon}</h1>
        <h1>Latitude : ${data.coord.lat}</h1>
        </div>`;
      let infoContainer = document.getElementById("weather-info");
      infoContainer.innerHTML = result;
      console.log(data);
    })
    .catch((err) => alert("invalid city"));
});
