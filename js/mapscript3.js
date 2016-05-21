function initMap() {

	var Guanajuato = {
		info: '<h1><b>Sucursal Guanajuato</b></h1><br/>Carretera A Guanajuato Juventino Rosas # 5<br/>Col: Marfil <br/>Telefono(s); (01-47) 37-33-25-79<br/>',
		lat: 20.994280009979075,
		long: -101.28471155575028
	};

		var Hidalgo = {
		info: '<h1><b>Sucursal Hidalgo</b></h1><br/>Blvd. Hidalgo # 1114 Fracc.Hidalgo <br/>Telefono(s); 01(477)7-73-02-52<br/>',
		lat: 21.143775471645767,
		long: -101.67336896995931
	};

	var Irapuato = {
		info: '<h1><b>Sucursal Irapuato</b></h1><br/>Blvd Diaz Ordaz Esq 16 De Septiembre<br/>Col. Centro <br/>Telefono(s); (01-46) 26-27-24-05<br/>',
		lat: 20.671112396626327,
		long: -101.33965551535243
	};

	var Morelos = {
		info: '<h1><b>Sucursal Morelos</b></h1><br/>Blvd Jose Maria Morelos #3631<br/>Col: Industrial San Julia De Jerez <br/>Telefono(s); (01-47) 71-67-56-00<br/>',
		lat: 21.10113336175205,
		long: -101.62418556946216
	};
	

	var Cuautitlan = {
		info: '<h1><b>Sucursal Cuautitlan</b></h1><br/>Carr. Cuautitlan- Melchor Ocampo N° 10 Lazaro Cardenas<br/>Telefono(s); 01(55) 58-72-01-91<br/>',
		lat: 19.67156585905263,
		long: -99.17420045536426
	};
	
	var Salamanca = {
		info: '<h1><b>Sucursal Salamanca</b></h1><br/>Hortaliza #207 Col: Las Granjas <br/>Telefono(s); (01-46) 46-48-63-33<br/>',
		lat: 20.58671260194934,
		long: -101.18940730006943
	};
	
	var Isidro = {
		info: '<h1><b>Sucursal San Isidro</b></h1><br/>Blvd Gonzalez Bocanegra  #4403<br/>Col: San Isidro  <br/>Telefono(s); 01(477)7-11-01-98<br/>',
		lat: 21.1008509,
		long: -101.64711320000003
	};
	
	var Bosco = {
		info: '<h1><b>Sucursal San Juan Bosco</b></h1><br/>Blvd. San Juan Bosco #1602 Esq. Asturias Col. San Juan Bosco<br/>Telefono(s); 01 (477) 778 0092<br/>',
		lat: 21.132502566654534,
		long: -101.71076552380794
	};

	var Landa = {
		info: '<h1><b>Sucursal Torres Landa</b></h1><br/>Blvd Juan Jose Torres Landa # 3404Pte Col: Granjas Campestres<br/>Telefono(s); (01-47) 77-78-00-39<br/>',
		lat: 21.101288527142515,
		long: -101.71448049999998
	};

	
		

	var locations = [
      [Guanajuato.info, Guanajuato.lat, Guanajuato.long, 0],
      [Hidalgo.info, Hidalgo.lat, Hidalgo.long, 1],
      [Irapuato.info, Irapuato.lat, Irapuato.long, 2],
	  [Morelos.info, Morelos.lat, Morelos.long, 3],
	  [Salamanca.info, Salamanca.lat, Salamanca.long, 4],
	  [Isidro.info, Isidro.lat, Isidro.long, 5],
	  [Bosco.info, Bosco.lat, Bosco.long, 6],
	  [Landa.info, Landa.lat, Landa.long, 7],
	 

    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 8,
		center: new google.maps.LatLng(20.501288527142515, -101.51448049999998),
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
