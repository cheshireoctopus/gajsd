// GOOGLE MAP SETUP HERE:










// CITIBIKE PROJECT HERE:
function renderCitiBikeMarkers(stations) {
  // YOUR CODE HERE!
}

// AJAX request to fetch the station data from CitiBike's API
// Warning! Do not break this :D
$.ajax({
	type: 'GET',
	url: 'http://api.citybik.es/citi-bike-nyc.json',
	success: renderCitiBikeMarkers,
});
