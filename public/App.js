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
			$("#weather-icon").attr("src", data.weather[0].icon);
			$("#weather-degrees").html(Math.round(data.main.temp) + "&deg;c");
			$("#weather-description").html(data.weather[0].description);
			$("#weather-humidity").html(Math.round(data.main.humidity) + "%");
			$("#weather-wind").html(Math.round(data.wind.speed) + "mph");
			$("#weather-location").html(data.name);
			});
		});
	};
	
	
				//Tokyo weather on click
			
			$("#weather-tokyo").on("click", function(){
				
					var tokyoLon = 390;
					var tokyoLat = 11;
					var tokyoWeather = "https://fcc-weather-api.glitch.me/api/current?lat=" + tokyoLat + "&lon=" + tokyoLon;
					
					$(".view").css({"background": "url(public/images/andre-benz-256762.jpg)", "background-size": "cover"});
					
				
				$.getJSON(tokyoWeather, function(data){
					
						$("#weather-icon").attr("src", data.weather[0].icon);
						$("#weather-degrees").html(Math.round(data.main.temp) + "&deg;c");
						$("#weather-description").html(data.weather[0].description);
						$("#weather-humidity").html(Math.round(data.main.humidity) + "%");
						$("#weather-wind").html(Math.round(data.wind.speed) + "mph");
						$("#weather-location").html("Tokyo, Japan");
					
				});
				
			});	
});

