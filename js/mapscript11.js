function initMap() {

	var Laredo = {
		info: '<h1><b>Sucursal Nuevo Laredo</b></h1><br/>Heroe de Nacataz No. 1924 Guerrero<br/>Telefono(s); (867) 7148206<br/>',
		lat: 27.48672952702418,
		long: -99.49984427631301
	};

		var Reynosa = {
		info: '<h1><b>Sucursal Reynosa </b></h1><br/>Blvd Morelos N° 1500A  Ampliacion Rodriguez<br/>Telefono(s); (899) 926-59-10<br/>',
		lat: 26.059959507342285,
		long: -98.29468382065431
	};

	
		

	var locations = [
      [Laredo.info, Laredo.lat, Laredo.long, 0],
	  [Reynosa.info, Reynosa.lat, Reynosa.long, 1],


    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 8,
		center: new google.maps.LatLng(26.159959507342285, -98.69468382065431),
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
