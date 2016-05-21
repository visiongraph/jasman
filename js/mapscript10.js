function initMap() {

	var Queretaro = {
		info: '<h1><b>Sucursal Queretaro</b></h1><br/>Ezequiel Montes Sur #164 Col. El Carrizal C.P. 76030<br/>Telefono(s); 4422166356, 2168572<br/>',
		lat: 20.58560014331326,
		long: -100.39632498732152
	};

	

	
		

	var locations = [
      [Queretaro.info, Queretaro.lat, Queretaro.long, 0],


    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: new google.maps.LatLng(20.54560014331326, -100.39632498732152),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}
