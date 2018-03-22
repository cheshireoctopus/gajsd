_500px.init({
	sdk_key: 'b1484761b62dcdedebb24e61a62077ae36af277c',
});

$('#login').click(function() {
	_500px.login();
});

_500px.on('authorization_obtained', function() {
	$('.sign-in-view').hide();
	$('.image-results-view').show();

 	if (navigator.geolocation) {
	    // if it is use the getCurrentPosition method to retrieve the Window's location
	    navigator.geolocation.getCurrentPosition(function(position) {
			var lat = position.coords.latitude;
			var long = position.coords.longitude;

			console.log('lat: ', lat);
			console.log('long: ', long);

			// Feel free to adjust the search radius as you see fit
			var radius = '25mi';

			var searchOptions = {
				geo: lat + ',' + long + ',' + radius,
				only: 'Landscapes', // We only want landscape photos
				image_size: 3 // This isn't neccessary but by default the images are thumbnail sized
			};

			_500px.api('/photos/search', searchOptions, function(response) {
				if (response.data.photos.length == 0) {
		  			alert('No photos found!');
				} else {
			  		// Handle the successful response here
			  		console.log(response);

			  		var allData = response.data.photos;

					$.each(allData, function() {
						var element = $('img').attr('src', this.image_url[0]).addClass('image');
						$('.images').append(element);
					});
				}
			});
	    })
	} else {
		$('.images').append('Sorry, the browser does not support geolocation');
	}
});


