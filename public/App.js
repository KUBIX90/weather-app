$(document).ready(function(){
		//Get Geo location//
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
		//parsing the JSON API//
		var lon = position.coords.longitude;
		var lat = position.coords.latitude;
		var weatherAPI = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
		
		$.getJSON(weatherAPI, function(data){
			
			//local weather information
			$("#weather-icon").html(data.weather.icon);
			$("#weather-degrees").html(Math.round(data.main.temp) + "&deg;c");
			
			$("#weather-humidity").html(Math.round(data.main.humidity) + "%");
			$("#weather-wind").html(Math.round(data.wind.speed) + "mph");
			$("#weather-location").html(data.name);
			});
		});
	};
});

