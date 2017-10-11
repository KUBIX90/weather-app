$(document).ready(function(){
	//Get Geo location//
	 if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
	
	//parsing the JSON API//
	var lon = position.coords.longitude;
	var lat = position.coords.latitude;
	var weatherAPI = "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon;
	
	$.getJSON(weatherAPI, function(data){
		alert(JSON.stringify(data));
			});
		});
	}
});
