$(document).ready(function(){
	
	var weatherAPI;
	var temp;
	
		//Get Geo location//
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
		//parsing the JSON API//
		var lon = position.coords.longitude;
		var lat = position.coords.latitude;
		var weatherAPI = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
		
		$.getJSON(weatherAPI, function(data){
			
			var temp = data.main.temp;
			
			//local weather information
			$("#weather-icon").attr("src", data.weather[0].icon);
			$("#weather-degrees").html(Math.round(temp) + "&deg;c");
			$("#weather-description").html(data.weather[0].description);
			$("#weather-humidity").html(Math.round(data.main.humidity) + "%");
			$("#weather-wind").html(Math.round(data.wind.speed) + "mph");
			$("#weather-location").html(data.name);
			
			
						//toggle temp
					$(".slider").on("click", function() {
						
						var toggleC = true;
						var tempC = temp;
						var tempF = temp*9/5 + 32;
			
							if (toggleC == true) {
								$("#weather-degrees").html(Math.round(tempF) + "&deg;F");
								$("#switch-temp--text").html("Fahrenheit");
							  toggleC = false;
							  
							} else if (toggleC == false) {

							  $("#weather-degrees").html(tempC + "&deg;C");
							  $("#switch-temp--text").html("Celsius");
							  toggleC = true;
							}
						});
			});
		});
	};
	
			//Paris weather on click
			$("#weather-paris").on("click", function(){
			
				var parisWeather = "https://fcc-weather-api.glitch.me/api/current?lat=48.85&lon=2.3";
				
					$(".view").css({"background": "url(public/images/paris.jpg)", "background-size": "cover"});
					$("#image-credit").html("Background by Chris Karidis").attr("href","https://unsplash.com/photos/nnzkZNYWHaU");
			
					$.getJSON(parisWeather, function(data){
						
							$("#weather-icon").attr("src", data.weather[0].icon);
							$("#weather-degrees").html(Math.round(data.main.temp) + "&deg;c");
							$("#weather-description").html(data.weather[0].description);
							$("#weather-humidity").html(Math.round(data.main.humidity) + "%");
							$("#weather-wind").html(Math.round(data.wind.speed) + "mph");
							$("#weather-location").html("Paris, France");
					});
			});	

			//Tokyo weather on click
			$("#weather-tokyo").on("click", function(){
		
				var tokyoWeather = "https://fcc-weather-api.glitch.me/api/current?lat=35.65&lon=139.8";
					
					$(".view").css({"background": "url(public/images/tokyo.jpg)", "background-size": "cover"});
					$("#image-credit").html("Background by Andre Benz").attr("href","https://unsplash.com/photos/Mn9Fa_wQH-M");
			
					$.getJSON(tokyoWeather, function(data){
						
							$("#weather-icon").attr("src", data.weather[0].icon);
							$("#weather-degrees").html(Math.round(data.main.temp) + "&deg;c");
							$("#weather-description").html(data.weather[0].description);
							$("#weather-humidity").html(Math.round(data.main.humidity) + "%");
							$("#weather-wind").html(Math.round(data.wind.speed) + "mph");
							$("#weather-location").html("Tokyo, Japan");
					});
			});	
			
									//Los Angeles weather on click
			$("#weather-LA").on("click", function(){
			
				var laWeather = "https://fcc-weather-api.glitch.me/api/current?lat=34.05&lon=-118.25";
					
					$(".view").css({"background": "url(public/images/los_angeles.jpg)", "background-size": "cover"});
					$("#image-credit").html("Background by Sasha").attr("href","https://unsplash.com/photos/WggyAvQTk6I");
			
					$.getJSON(laWeather, function(data){
						
							$("#weather-icon").attr("src", data.weather[0].icon);
							$("#weather-degrees").html(Math.round(data.main.temp) + "&deg;c");
							$("#weather-description").html(data.weather[0].description);
							$("#weather-humidity").html(Math.round(data.main.humidity) + "%");
							$("#weather-wind").html(Math.round(data.wind.speed) + "mph");
							$("#weather-location").html("Los Angeles, California");
					});
			});	
			
									//Dubai weather on click
			$("#weather-dubai").on("click", function(){
			
				var dubaiWeather = "https://fcc-weather-api.glitch.me/api/current?lat=25.2&lon=55.27";
					
					$(".view").css({"background": "url(public/images/dubai.jpg)", "background-size": "cover"});
					$("#image-credit").html("Background by Roman Logov").attr("href","https://unsplash.com/photos/jomuw0-3F8A");
			
					$.getJSON(dubaiWeather, function(data){
						
							$("#weather-icon").attr("src", data.weather[0].icon);
							$("#weather-degrees").html(Math.round(data.main.temp) + "&deg;c");
							$("#weather-description").html(data.weather[0].description);
							$("#weather-humidity").html(Math.round(data.main.humidity) + "%");
							$("#weather-wind").html(Math.round(data.wind.speed) + "mph");
							$("#weather-location").html("Dubai, UAE");
					});
			});	
			
									//New York weather on click
			$("#weather-new-york").on("click", function(){
			
				var newYorkWeather = "https://fcc-weather-api.glitch.me/api/current?lat=40.73&lon=-73.9";
					
					$(".view").css({"background": "url(public/images/new_york.jpg)", "background-size": "cover"});
					$("#image-credit").html("Background by Frank Kohntopp").attr("href","https://unsplash.com/photos/yUJfcGrJDbc");
			
					$.getJSON(newYorkWeather, function(data){
						
							$("#weather-icon").attr("src", data.weather[0].icon);
							$("#weather-degrees").html(Math.round(data.main.temp) + "&deg;c");
							$("#weather-description").html(data.weather[0].description);
							$("#weather-humidity").html(Math.round(data.main.humidity) + "%");
							$("#weather-wind").html(Math.round(data.wind.speed) + "mph");
							$("#weather-location").html("New York City, New York");
					});
			});	
			
												//London weather on click
			$("#weather-london").on("click", function(){
			
				var londonWeather = "https://fcc-weather-api.glitch.me/api/current?lat=51.5&lon=-0.11";
					
					$(".view").css({"background": "url(public/images/london.jpg)", "background-size": "cover"});
					$("#image-credit").html("Background by Rob Bye").attr("href","https://unsplash.com/photos/7baQ2b019NY");
			
					$.getJSON(londonWeather, function(data){
						
							$("#weather-icon").attr("src", data.weather[0].icon);
							$("#weather-degrees").html(Math.round(data.main.temp) + "&deg;c");
							$("#weather-description").html(data.weather[0].description);
							$("#weather-humidity").html(Math.round(data.main.humidity) + "%");
							$("#weather-wind").html(Math.round(data.wind.speed) + "mph");
							$("#weather-location").html("London, England ");
					});
			});
			
			

	});

