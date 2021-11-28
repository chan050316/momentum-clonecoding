const WeatherNoneEl = document.querySelector('#jsWeatherNone');
const WeatherEl = document.querySelector('#jsWeather');

const API_KEY = "a9974607ee11f242946f6b7e6701d188";

WeatherEl.classList.add("hidden");

function onGeoOk(position) { 
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherEl = document.querySelector('#jsWeather span:first-child');
      const city = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      weatherEl.innerText = `${city} / ${weather} / ${temp}`;
    });
  WeatherEl.classList.remove("hidden");
  WeatherNoneEl.classList.add("hidden");
  console.log(1)
}

function onGeoError() {
  alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)