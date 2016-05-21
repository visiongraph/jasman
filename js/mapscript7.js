function initMap() {

	var Cuautla = {
		info: '<h1><b>Sucursal Cuautla</b></h1><br/>San Martin (Calle Reforma) N° 45  Col: Centro <br/>Telefono(s); 01(735 ) 3-52-00-72<br/>',
		lat: 18.81559044454351,
		long: -98.95034144652709
	};

	
		

	var locations = [
      [Cuautla.info, Cuautla.lat, Cuautla.long, 0],

	 

    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: new google.maps.LatLng(18.81559044454351, -98.95034144652709),
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
