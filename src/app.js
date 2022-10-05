function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}


function displayWeatherCondition (response){
  document.querySelector("#sity").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#feels-like").innerHTML = Math.round(response.data.main.feels_like);
  document.querySelector("#max-temp").innerHTML = Math.round(response.data.main.temp_max);
  document.querySelector("#min-temp").innerHTML = Math.round(response.data.main.temp_min);
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
  document.querySelector("#humidity").innerHTML = Math.round(response.data.main.humidity);
  document.querySelector("#cloudy").innerHTML =
    response.data.weather[0].description;

  let datetoday = document.querySelector("#day-time-today");
  datetoday.innerHTML = formatDate(response.data.dt * 1000);
  console.log(response.data);


  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}



function searchSity (sity) {
   let apiKey = "c73627997b1d23b47d143634c55fed12";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${sity}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let sity = document.querySelector("#search-text-input").value;
  searchSity(sity);
}

function searchLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "c73627997b1d23b47d143634c55fed12";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  console.log(apiUrl);

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocations(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let formSearchSity = document.querySelector("#search-form");
formSearchSity.addEventListener("submit", handleSubmit);

let now = new Date();
// let today = document.querySelector("#day-time-today");
// today.innerHTML = formatDate(today);

let currentLocationButton = document.querySelector("#button-location");
currentLocationButton.addEventListener("click", getCurrentLocations);





/*function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElementC = document.querySelector("#temperature");
  let temperature = temperatureElementC.innerHTML;
  temperatureElementC.innerHTML = `${temperature}`;
   
  
}*/

/*function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}*/

/*let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);*/

/*let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};*/

/*let sity = prompt("Enter a sity?");
//sity = sity.toLowerCase();
if (weather[sity] !== undefined) {
  let temperature = weather[sity].temp;
  let humidity = weather[sity].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsiusTemperature} (${fahrenheitTemperature}) in ${sity} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${sity}`
  );
}*/













