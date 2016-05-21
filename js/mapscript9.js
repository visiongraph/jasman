function initMap() {

	var Abastos = {
		info: '<h1><b>Sucursal Abastos</b></h1><br/>Ave. Los Angeles N° 2200 Col: Mariano Escobedo<br/>Telefono(s); (81) 83516496<br/>',
		lat: 25.710596447838906,
		long: -100.291106835194
	};

		var Central = {
		info: '<h1><b>Sucursal Central</b></h1><br/>Ave. Fidel Velazquez 1513 Pte. Central<br/>Telefono(s); (81) 83711286<br/>',
		lat: 25.718821995840933,
		long: -100.34108733284143
	};

	var Chapultepec = {
		info: '<h1><b>Sucursal Chapultepec</b></h1><br/>Ave. Chapultepec N 1705 casi esq con revolución. Buenos aires<br/>Telefono(s); (81) 83-87-68-26<br/>',
		lat: 25.66716507583958,
		long: -100.28308301224212
	};

	var Cigarrera = {
		info: '<h1><b>Sucursal Cigarrera</b></h1><br/>Ave. Madero N° 2401 Pte.  Centro<br/>Telefono(s); (81) 83484607<br/>',
		lat: 25.68655068951525,
		long: -100.33539880728875
	};
	

	var Contry = {
		info: '<h1><b>Sucursal Contry</b></h1><br/>Ave. Garza Sada N° 4073 Sierra Ventana<br/>Telefono(s); (81) 83574280<br/>',
		lat: 25.628435234389325,
		long: -100.27818159205168
	};
	
	var Diaz = {
		info: '<h1><b>Sucursal Diego Diaz</b></h1><br/>Av. Diego Diaz de Berlanga No. 933  Jardines de Anahuac<br/>Telefono(s); (81) 80-57-51-51<br/>',
		lat: 25.73372320326605,
		long: -100.27127410683227
	};
	
	var Juarez = {
		info: '<h1><b>Sucursal Juarez</b></h1><br/>Ave. Juarez N° 555 Nte.  Centro<br/><br/>Telefono(s); (81) 83755555<br/>',
		lat: 25.680398623929158,
		long: -100.31367623951417
	};
	
	var Torres = {
		info: '<h1><b>Sucursal Las Torres</b></h1><br/>Av. Lazaro Cardenas #4432 Ote. Las Torres C.P. 64930<br/>Telefono(s); 01 (81) 81031094 <br/>',
		lat: 25.615826749695533,
		long: -100.2778200194519
	};

	var Lincoln = {
		info: '<h1><b>Sucursal Lincoln</b></h1><br/>Lincoln No. 7305  Plutarco Elias Calles<br/>Telefono(s); (81) 14257568<br/>',
		lat: 25.751565541645032,
		long: -100.39085545942459
	};
		var Vista = {
		info: '<h1><b>Sucursal Linda Vista</b></h1><br/>Ave. Miguel Aleman N° 4418 Ote. Linda Vista<br/>Telefono(s); (81) 83794409<br/>',
		lat: 25.68843371374402,
		long: -100.25823743571777
	};
		var Primavera = {
		info: '<h1><b>Sucursal Primavera</b></h1><br/>Av. Primavera #400 Col. 3 Caminos C.P.67190<br/>Telefono(s); 8333-6961<br/>',
		lat: 25.660072285933175,
		long: -100.18985121602248
	};
		var Nicolas = {
		info: '<h1><b>Sucursal San Nicolas</b></h1><br/>Ave.Fray B de Las Casas N° 107 Roble <br/>Telefono(s); (81) 83762434<br/>',
		lat: 25.74636163095222,
		long: -100.30062865934144
	};
		var Universidad = {
		info: '<h1><b>Sucursal Universidad</b></h1><br/>Ave. Alfonso Reyes N° 3339 Regina<br/>Telefono(s); (01-81) 81-25-93-05<br/>',
		lat: 25.710692258392122,
		long: -100.31287437036133
	};
		var Valle = {
		info: '<h1><b>Sucursal Valle</b></h1><br/>Ave. Vasconcelos N° 401-A  Valle<br/><br/><br/>Telefono(s); (81) 83387143<br/>',
		lat: 25.6539518586885,
		long: -100.38131466430968
	};

	
		

	var locations = [
      [Abastos.info, Abastos.lat, Abastos.long, 0],
      [Central.info, Central.lat, Central.long, 1],
      [Chapultepec.info, Chapultepec.lat, Chapultepec.long, 2],
	  [Cigarrera.info, Cigarrera.lat, Cigarrera.long, 3],
	  [Contry.info, Contry.lat, Contry.long, 4],
	  [Diaz.info, Diaz.lat, Diaz.long, 5],
	  [Juarez.info, Juarez.lat, Juarez.long, 6],
	  [Torres.info, Torres.lat, Torres.long, 7],
	  [Lincoln.info, Lincoln.lat, Lincoln.long, 8],
	  [Vista.info, Vista.lat, Vista.long, 9],
	  [Primavera.info, Primavera.lat, Primavera.long, 10],
	  [Nicolas.info, Nicolas.lat, Nicolas.long, 11],
	  [Universidad.info, Universidad.lat, Universidad.long, 12],
	  [Valle.info, Valle.lat, Valle.long, 13],

    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: new google.maps.LatLng(25.6539518586885, -100.34131466430968),
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
