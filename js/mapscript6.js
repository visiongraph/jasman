function initMap() {

	var Losreyes = {
		info: '<h1><b>Sucursal Los Reyes</b></h1><br/>Av. San Juan s/n Col. centro<br/>Telefono(s); (354) 5420578<br/>',
		lat: 19.598148238528722,
		long: -102.47461163592413
	};

		var Sahuayo = {
		info: '<h1><b>Sucursal Sahuayo</b></h1><br/>Blv. Lázaro Cardenas N° 595 Noria de montes<br/>Telefono(s); (353) 5 32 07 92<br/>',
		lat: 20.046560496792157,
		long: -102.71626057036133
	};

	var Eureka = {
		info: '<h1><b>Sucursal Uruapan Eureka</b></h1><br/>Paseo Lázaro Cárdenas N° 560 Morelos<br/>Telefono(s); (452) 5194619<br/>',
		lat: 19.41316944148296,
		long: -102.052576618177
	};

	var Uruapan = {
		info: '<h1><b>Sucursal Uruapan Paseo</b></h1><br/>Paseo Lázaro Cárdenas N° 2290 <br/>Telefono(s); (452) 5240443<br/>',
		lat: 19.39797779054948,
		long: -102.05669380901486
	};
	

	var Jardinadas = {
		info: '<<h1><b>Sucursal Zamora Jardinadas</b></h1><br/>Av. Virrey de Mendoza N° 742 Jardinadas<br/>Telefono(s); (351) 5154682<br/>',
		lat: 19.974908439947093,
		long: -102.28555715019303
	};
	
	var Juarez = {
		info: '<h1><b>Sucursal Zamora Juarez</b></h1><br/>Av. Juarez N° 57 Ote. Centro Zamora<br/><br/>Telefono(s); (351) 5174345<br/>',
		lat: 19.988627504794263,
		long: -102.28403890772631
	};
	
	
		

	var locations = [
      [Losreyes.info, Losreyes.lat, Losreyes.long, 0],
      [Sahuayo.info, Sahuayo.lat, Sahuayo.long, 1],
      [Eureka.info, Eureka.lat, Eureka.long, 2],
	  [Uruapan.info, Uruapan.lat, Uruapan.long, 3],
	  [Jardinadas.info, Jardinadas.lat, Jardinadas.long, 4],
	  [Juarez.info, Juarez.lat, Juarez.long, 5],

	 

    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 9,
		center: new google.maps.LatLng(19.488627504794263, -102.28403890772631),
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
