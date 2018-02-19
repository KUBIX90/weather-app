var apiRequest = new XMLHttpRequest();
var select = document.querySelector.bind(document);
var toggleF = true;
var tempInfo;

function getWeather(lon, lat) {
  apiRequest.open(
    "GET",
    "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon
  );
  apiRequest.onload = function() {
    var data = JSON.parse(apiRequest.responseText);
    tempInfo = data.main.temp;
		select("#weather-icon").setAttribute("src", data.weather[0].icon);
		select("#weather-degrees").innerHTML = Math.round(data.main.temp) + "&deg;c";
		select("#weather-description").innerHTML = data.weather[0].description;
		select("#weather-humidity").innerHTML = Math.round(data.main.humidity) + "%";
		select("#weather-wind").innerHTML = Math.round(data.wind.speed) + "mph";
		select("#weather-location").innerHTML = data.name;
  };
  apiRequest.send();
}

function toggleTemp() {
  var tempF = tempInfo * 9 / 5 + 32;

  if (toggleF) {
		select("#weather-degrees").innerHTML = Math.round(tempF) + "&deg;F";
		select("#temp-slider-text").innerHTML = "Fahrenheit";
		toggleF = false;
  } else if (toggleF == false) {
		select("#weather-degrees").innerHTML = Math.round(tempInfo) + "&deg;C";
		select("#temp-slider-text").innerHTML = "Celsius";
		toggleF = true;
  }
}

function changeBackground(city, name, link) {
	  select("html body").style.backgroundImage =
		"url(public/images/" + city + ".jpg)";
	  select("#image-credit").innerHTML = "Background by " + name;
	  select("#image-credit").setAttribute("href", link);
}

//////////////////////////////////////////////////////////////////////

//Show my local weather
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lon = position.coords.longitude;
    var lat = position.coords.latitude;

    getWeather(lon, lat);
  });
}

select("#temp-slider").addEventListener("click", toggleTemp);

select("#weather-paris").addEventListener("click", function() {
  getWeather(2.3, 48.85);
  changeBackground(
    "paris",
    "Chris Karidis",
    "https://unsplash.com/photos/nnzkZNYWHaU"
  );
});

select("#weather-tokyo").addEventListener("click", function() {
  getWeather(139.8, 35.65);
  changeBackground(
    "tokyo",
    "Andre Benz",
    "https://unsplash.com/photos/Mn9Fa_wQH-M"
  );
});

select("#weather-LA").addEventListener("click", function() {
  getWeather(-118.25, 34.05);
  changeBackground(
    "los_angeles",
    "Sasha",
    "https://unsplash.com/photos/WggyAvQTk6I"
  );
});

select("#weather-dubai").addEventListener("click", function() {
  getWeather(55.27, 25.2);
  changeBackground(
    "dubai",
    "Roman Logov",
    "https://unsplash.com/photos/jomuw0-3F8A"
  );
});

select("#weather-new-york").addEventListener("click", function() {
  getWeather(-73.94, 40.73);
  changeBackground(
    "new_york",
    "Frank Kohntopp",
    "https://unsplash.com/photos/yUJfcGrJDbc"
  );
});

select("#weather-london").addEventListener("click", function() {
  getWeather(-0.11, 51.5);
  changeBackground(
    "london",
    "Rob Bye",
    "https://unsplash.com/photos/7baQ2b019NY"
  );
});

