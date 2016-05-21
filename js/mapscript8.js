function initMap() {

	var Guanajuato = {
		info: '<h1><b>Sucursal Tepic</b></h1><br/>xalisco-tepic  105, Col. Caja de Agua<br/>Telefono(s); (311) 2139868<br/>',
		lat: 21.495555798942668,
		long: -104.8966864390701
	};



	
		

	var locations = [
      [Guanajuato.info, Guanajuato.lat, Guanajuato.long, 0],

	 

    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(21.495555798942668, -104.8966864390701),
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
