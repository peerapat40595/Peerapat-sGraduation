function open_google_map(json_id) {
	$.ajax({
      url:      "https://api.myjson.com/bins/" + json_id,
      async:    false,
      dataType: "json",
      success:  function(data) {
    	lat = data.lat
		lng = data.lng
		// console.log("lat: " + lat + '\n' + "lng: " + lng)

		// If it's an iPhone
		if( (navigator.platform.indexOf("iPhone") != -1) 
			|| (navigator.platform.indexOf("iPod") != -1)
			|| (navigator.platform.indexOf("iPad") != -1)) {
				console.log('This is a mobile');
				window.open("comgooglemaps://?center=" + lat + "," + lng + "&zoom=14&views=traffic&&q=" + lat + "+" + lng, "googlemapWindow");
		}
		else {
			console.log('This is not a mobile');
			var newWindow = window.open("http://maps.google.com/maps?q=" + lat + "," + lng + "&amp;ll=", "googlemapWindow");
			newWindow.focus();
		}
      }
    });
}