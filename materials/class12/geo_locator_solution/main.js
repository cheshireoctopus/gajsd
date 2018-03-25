/* 
  Geo Locator Overview:

  In this exercise, you will be using a series of API's to:
    1: Determine the user's approximate location
    2: Render a map with a marker on this location
    3. Fetch and display weather data based on this location

  You will be using the following API's:
    - Open Weather Maps API
    - Google Maps API
    - The brower's navigator.geolocation API

  This exercise works in three parts.

  Please refer back to open_weather_map and cit_bike_google_maps for help with parts two and three.
*/

/* 
  Part One: Determine the user's approximate location

  1. Create a function, "handleResponse", that takes one argument, "position"
  2. For now, all this function should do is console log out the "position" argument; you will be adding to it later
  3. Next, use the browser's navigator to the get the user's current position (see slides for help)
  4. Be sure to handle "getCurrentPosition" asynchronous behavior with the "handleResponse" callback
  5. Note: the geolocation request can take a while to resolve; feel free to mock out this response if necessary
*/

function handleResponse(position) {
  buildMap(position.coords.latitude, position.coords.longitude)
  fetchWeather(position.coords.latitude, position.coords.longitude)
}

navigator.geolocation.getCurrentPosition(handleResponse)

/* 
  Part Two: Render a Google Map/Marker

  1. Create a function, "buildMap", that takes two arguments: "latitude" and "longitude"
  2. Inside "buildMap", create a new Google map using the "latitude" and "longitude" arguments passed in (refer to previous hw for help)
  3. Also inside "buildMap", create a new map marker using the same "latitude" and "longitude" arguments passed in
  4. Call the function, "buildMap", from within "handleResponse" above (be sure to pass it the correct arguments)
  5. If successful, you should be rendering a google map/marker of your current location
*/

function buildMap(latitude, longitude) {
  var map = new google.maps.Map(document.querySelector('#map'), {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 12,
  })

  var marker = new google.maps.Marker({
    position: {
      lat: latitude,
      lng: longitude,
    },
    map: map,
  })
}

/* 
  Part Three: Fetch weather data from Open Weather Maps

  1. Create a function, "fetchWeather", that takes two arugments: "latitude" and "longitude"
  2. Inside this function, first create a variable, "URL", set equal to the following (add your API key)
  
    'http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + latitude + '&lon=' + longitude + '&APPID=YOUR_API_KEY_HERE'

  3. Next, make an AJAX request to this URL - ensure it is a "GET" request
  4. Also ensure your AJAX request has a "success" handler (see open_weather_map)
  5. This "success" handler function should use DOM manipulation to append the current temperature into #weather
  6. Call the function, "fetchWeather", from within "handleResponse" above (be sure to pass it the correct arguments)
*/

function fetchWeather(latitude, longitude) {
  var URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' + latitude + '&lon=' + longitude + '&APPID=bf051e197da4655b52447684d8d279d3'

  $.ajax({
    type: 'GET',
    url: URL,
    success: handleWeatherResponse,
  })
}

function handleWeatherResponse(response) {
  $('#weather').html(response.main.temp)
}


