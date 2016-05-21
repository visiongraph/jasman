function initMap() {

	var Pachuca = {
		info: '<h1><b>Sucursal Pachuca</b></h1><br/>Av. Alta Tencion N° 109 Col: Santa Julia <br/>Telefono(s); 01(771) 71-47-912<br/>',
		lat: 20.1152114,
		long: -98.75355289999999
	};

	
	
		

	var locations = [
      [Pachuca.info, Pachuca.lat, Pachuca.long, 0],

	 

    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(20.1002114, -98.75355289999999),
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
