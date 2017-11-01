$(document).ready(function() {
  
  var toggleF = true;
  var weatherData;

  function weatherInfo(lat, lon) {
    var weatherAPI =
      "https://fcc-weather-api.glitch.me/api/current?lat=" +
      lat +
      "&lon=" +
      lon;

    $.getJSON(weatherAPI, function(data) {
		
      //local weather information
	  weatherData=data;
      $("#weather-icon").attr("src", data.weather[0].icon);
      $("#weather-degrees").html(Math.round(data.main.temp) + "&deg;c");
      $("#weather-description").html(data.weather[0].description);
      $("#weather-humidity").html(Math.round(data.main.humidity) + "%");
      $("#weather-wind").html(Math.round(data.wind.speed) + "mph");
      $("#weather-location").html(data.name);
    });
  }

  function changeBackground(city, name, URL) {
    $(".view").css({
      "background-size": "cover"
    });
    $(".view")
      .removeClass()
      .addClass("view")
      .addClass("background-" + city);
    $("#image-credit")
      .html("Background by " + name)
      .attr("href", URL);
  }

  function toggleTemp() {
        
		var tempC = weatherData.main.temp;
        var tempF = tempC * 9 / 5 + 32;

        if (toggleF) {
          $("#weather-degrees").html(Math.round(tempF) + "&deg;F");
          $("#temp-slider-text").html("Fahrenheit");
          toggleF = false;
        } else if (toggleF == false) {
          $("#weather-degrees").html(Math.round(tempC) + "&deg;C");
          $("#temp-slider-text").html("Celsius");
          toggleF = true;
        }
  }
  
  $(".temp-slider").on("click", toggleTemp);

  /////////////////////////////////////////////////////////////

  //Get Geo location//
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      //Show my local weather
      var lon = position.coords.longitude;
      var lat = position.coords.latitude;

      weatherInfo(lat, lon);
    });
  }

  //Paris weather on click
  $("#weather-paris").on("click", function() {
    changeBackground(
      "paris",
      "Chris Karidis",
      "https://unsplash.com/photos/nnzkZNYWHaU"
    );
    weatherInfo(48.85, 2.3);
  });

  //Tokyo weather on click
  $("#weather-tokyo").on("click", function() {
    changeBackground(
      "tokyo",
      "Andre Benz",
      "https://unsplash.com/photos/Mn9Fa_wQH-M"
    );
    weatherInfo(35.65, 139.8);
  });

  //Los Angeles weather on click
  $("#weather-LA").on("click", function() {
    changeBackground(
      "los_angeles",
      "Sasha",
      "https://unsplash.com/photos/WggyAvQTk6I"
    );
    weatherInfo(34.05, -118.25);
  });

  //Dubai weather on click
  $("#weather-dubai").on("click", function() {
	changeBackground(
      "dubai",
      "Roman Logov",
      "https://unsplash.com/photos/jomuw0-3F8A"
    );
    weatherInfo(25.2, 55.27);
  });
  
  //New York weather on click
  $("#weather-new-york").on("click", function() {
    changeBackground(
      "new_york",
      "Frank Kohntopp",
      "https://unsplash.com/photos/yUJfcGrJDbc"
    );
    weatherInfo(40.73, -73.9);
  });

  //London weather on click
  $("#weather-london").on("click", function() {
    changeBackground(
      "london",
      "Rob Bye",
      "https://unsplash.com/photos/7baQ2b019NY"
    );
    weatherInfo(51.5, -0.11);
  });
});
