$(document).ready(function(){
		//Get Geo location//
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
		//parsing the JSON API//
		var lon = position.coords.longitude;
		var lat = position.coords.latitude;
		var weatherAPI = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
		
		$.getJSON(weatherAPI, function(data){
		
			var icon = data.weather[0].icon;
			
			//local weather information
			$("#weather-icon").attr("src", icon);
			$("#weather-degrees").html(Math.round(data.main.temp) + "&deg;c");
			$("#weather-description").html(data.weather[0].description);
			$("#weather-humidity").html(Math.round(data.main.humidity) + "%");
			$("#weather-wind").html(Math.round(data.wind.speed) + "mph");
			$("#weather-location").html(data.name);
			});
		});
	};
});

