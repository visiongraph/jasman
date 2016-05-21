function initMap() {

	var GDL = {
		info: '<h1><b>Sucursal Abastos GDL</b></h1><br/>Calle Nance N° 1641 Jardines de la Cruz<br/><br/>Telefono(s); (01-33) 38-10-71-11<br/>',
		lat: 20.648075518975,
		long: -103.38043087224423
	};

		var Americas = {
		info: '<h1><b>Sucursal Americas</b></h1><br/>Av. Américas N° 121  Ladron de guevara<br/>Telefono(s); (333) 6152570<br/>',
		lat: 20.67840906203679,
		long: -103.37380266875192
	};

	var Belisario = {
		info: '<h1><b>Sucursal Belisario</b></h1><br/>Pablo Valdez no. 1015 La perla<br/>Telefono(s); (33) 36179741<br/>',
		lat: 20.681871224303215,
		long: -103.32701837879029
	};

	var Calzada = {
		info: '<h1><b>Sucursal Calzada Sur</b></h1><br/>Calzada independencia  Sur N° 797 Las Conchas<br/>Telefono(s); (333) 6194444<br/>',
		lat: 20.662597095995896,
		long: -103.34832154445803
	};
	

	var Mina = {
		info: '<h1><b>Sucursal Javier Mina</b></h1><br/>Av. Javier Mina N° 1395 Olimpica<br/>Telefono(s); (333) 6655456<br/>',
		lat: 20.668271254576084,
		long: -103.3153044069237
	};
	
	var Barca = {
		info: '<h1><b>Sucursal La Barca</b></h1><br/>Colón N° 200 Centro<br/>Telefono(s); (01) 393 93 54 002<br/>',
		lat: 20.285168246476665,
		long: -102.55150002058946
	};
	
	var Mateos = {
		info: '<h1><b>Sucursal Lopez Mateos</b></h1><br/>Av. López Mateos Sur N° 682  Los Arcos<br/>Telefono(s); (333) 1210996<br/>',
		lat: 20.667700150661247,
		long: -103.39226220370483
	};
	
	var Ocotlan = {
		info: '<h1><b>Sucursal Ocotlan</b></h1><br/>Carr. Guadalajara- La barca Km 80 Col: Centro<br/>Telefono(s); (01) 392 9220197<br/>',
		lat: 20.346918424647605,
		long: -102.77789104543456
	};

	var Patria = {
		info: '<h1><b>Sucursal Patria</b></h1><br/>Av. Patria #613, Col. Jardines de Guadalupe<br/><br/>Telefono(s); 01 (33) 31650651<br/>',
		lat: 20.6657071,
		long: -103.42388770000002
	};

		var Vallarta = {
		info: '<h1><b>Sucursal Periferico Vallarta</b></h1><br/>Prol. Vallarta N° 641-1 Sn juan de ocotlan<br/>Telefono(s); (33) 36738514<br/>',
		lat: 20.700743430497297,
		long: -103.45960751031191
	};
		
	var Revolucion = {
		info: '<h1><b>Sucursal Revolución GDL</b></h1><br/>Av. Revolucion N° 2585 Jardines de la paz<br/>Telefono(s); (33) 38388557<br/>',
		lat: 20.647020989128382,
		long: -103.30516640980579
	};
	
	
	var locations = [
      [GDL.info, GDL.lat, GDL.long, 0],
      [Americas.info, Americas.lat, Americas.long, 1],
      [Belisario.info, Belisario.lat, Belisario.long, 2],
	  [Calzada.info, Calzada.lat, Calzada.long, 3],
	  [Mina.info, Mina.lat, Mina.long, 4],
	  [Mateos.info, Mateos.lat, Mateos.long, 5],
	  [Ocotlan.info, Ocotlan.lat, Ocotlan.long, 6],
	  [Patria.info, Patria.lat, Patria.long, 7],
	  [Vallarta.info, Vallarta.lat, Vallarta.long, 8],
	  [Revolucion.info, Revolucion.lat, Revolucion.long, 9],

	 

    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: new google.maps.LatLng(20.406000989128382, -103.20016640980579),
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
