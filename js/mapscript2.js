function initMap() {

	var Alamedas = {
		info: '<h1><b>Sucursal Alamedas</b></h1><br/>Blvd. Adolfo Ruiz Cortinez N° 26<br/><br/>Telefono(s); 01(55) 58-16-75-28<br/>',
		lat: 19.556216365593837,
		long: -99.24362990462419
	};

		var Aragon = {
		info: '<h1><b>Sucursal Aragon</b></h1><br/>Central N° 259 Bosques De Aragon<br/><br/><br/>Telefono(s); 01(55) 57-66-72-84<br/>',
		lat: 19.47384677091733,
		long: -99.05358819388624
	};

	var Chalco = {
		info: '<h1><b>Sucursal Chalco</b></h1><br/>Av. Cuauhtemoc S/N Col: San Miguel Jacalones<br/><br/><br/>Telefono(s); 01(55) 17-34-38-07<br/>',
		lat: 19.271686388303742,
		long: -98.89051304005886
	};

	var Coacalco = {
		info: '<h1><b>Sucursal Coacalco</b></h1><br/>VIA LOPEZ PORTILLO #145, COL. SAN LORENZO TETLIXTAC<br/>Telefono(s); (55) 58654983<br/>',
		lat: 19.630199747411137,
		long: -99.08647081250683
	};
	

	var Cuautitlan = {
		info: '<h1><b>Sucursal Cuautitlan</b></h1><br/>Carr. Cuautitlan- Melchor Ocampo N° 10 Lazaro Cardenas<br/>Telefono(s); 01(55) 58-72-01-91<br/>',
		lat: 19.67156585905263,
		long: -99.17420045536426
	};
	
	var Interlomas = {
		info: '<h1><b>Sucursal Interlomas</b></h1><br/>Circuito Empresarial # 4 , Col. Centro  Urbano     <br/>Telefono(s); (01-55) 52-90-14-30 <br/>',
		lat: 19.400577756456606,
		long: -99.2713039142273
	};
	
	var Verdes = {
		info: '<h1><b>Sucursal Lomas Verdes</b></h1><br/>Av.Lomas Verdes N° 407 <br/>Telefono(s); 01(55) 53-44-58-80<br/>',
		lat: 19.500177632833307,
		long: -99.25023872453687
	};
	
	var Reyes = {
		info: '<h1><b>Sucursal Los Reyes</b></h1><br/>Av. San Francisco N° 131 Col: Floresta<br/>Los Reyes La Paz<br/>Telefono(s); 01(55) 58-58-24-03<br/>',
		lat: 19.35795983322495,
		long: -98.98750849275439
	};

	var Nezahualcoyotl = {
		info: '<h1><b>Sucursal Nezahualcoyotl</b></h1><br/>Av. Sor Juana Ines De La Cruz N° 283 Esq. Pantitlan Col. Evolucion <br/>Telefono(s); 01(55) 57-97-94-35<br/>',
		lat: 19.39566309152545,
		long: -99.01986178290065
	};

	var Texcoco = {
		info: '<h1><b>Sucursal Texcoco</b></h1><br/>Fray Pedro De Gante N° 413 San Mateo<br/><br/>Telefono(s); 01(595) 95-43-740<br/>',
		lat: 19.519181745860408,
		long: -98.8838661152542
	};
	
		var Texcoco2 = {
		info: '<h1><b>Sucursal Texcoco II</b></h1><br/>ALLENDE #310 COL. SAN JUAN DE DIOS<br/>Telefono(s); (595) 9250569<br/>',
		lat: 19.511603866266704,
		long: -98.8780365959006
	};
	
		var Toluca1 = {
		info: '<h1><b>Sucursal Toluca 1</b></h1><br/>Filiberto Gomez N° 601 Col: Guadalupe Club Jardin<br/><br/>Telefono(s); 01(722 ) 237-79-40<br/>',
		lat: 19.308739841411626,
		long: -99.64113157052543
	};
	
		var Toluca2 = {
		info: '<h1><b>Sucursal Toluca 2 </b></h1><br/>Av. Pino Suarez Sur #800 Col. Cuauhtemoc <br/>Telefono(s);  (01-722) 2-83-12-71<br/>',
		lat: 19.27975816694068,
		long: -99.64876855672435
	};
	
		var Zumpango = {
		info: '<h1><b>Sucursal Zumpango</b></h1><br/>Av. Hidalgo  N° 63  Col San Lorenzo<br/><br/>Telefono(s); 01(591) 91-75-247<br/>',
		lat: 19.796529995402746,
		long: -99.09352620963972
	};
	
		

	var locations = [
      [Alamedas.info, Alamedas.lat, Alamedas.long, 0],
      [Aragon.info, Aragon.lat, Aragon.long, 1],
      [Chalco.info, Chalco.lat, Chalco.long, 2],
	  [Coacalco.info, Coacalco.lat, Coacalco.long, 3],
	  [Cuautitlan.info, Cuautitlan.lat, Cuautitlan.long, 4],
	  [Interlomas.info, Interlomas.lat, Interlomas.long, 5],
	  [Verdes.info, Verdes.lat, Verdes.long, 6],
	  [Reyes.info, Reyes.lat, Reyes.long, 7],
	  [Nezahualcoyotl.info, Nezahualcoyotl.lat, Nezahualcoyotl.long, 8],
	  [Texcoco.info, Texcoco.lat, Texcoco.long, 9],
	  [Texcoco2.info, Texcoco2.lat, Texcoco2.long, 10],
	  [Toluca1.info, Toluca1.lat, Toluca1.long, 11],
	  [Toluca2.info, Toluca2.lat, Toluca2.long, 12],
	  [Zumpango.info, Zumpango.lat, Zumpango.long, 13],

    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 9,
		center: new google.maps.LatLng(19.156216365593837, -99.23362990462419),
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
