function initMap() {

	var aeropuerto = {
		info: '<h1><b>Sucursal Aeropuerto</b></h1><br>\
					Oriente 138 N° 139 Esquina Norte 1 <br/>Col: Moctezuma 2 A Seccion Venustiano<br/>Telefono(s); 01(55) 55-71-10-04<br/>\
					<a href="https://www.google.com/maps/dir//19.433025206921048+,+-99.10521754539946/@19.4327519,-99.1060318,16.84z/data=!4m6!4m5!1m0!1m3!2m2!1d-99.1052175!2d19.4330252" target="mapas">Como llegar</a>',
		lat: 19.433025206921048,
		long: -99.10521754539946
	};

		var ajusco = {
		info: '<h1><b>Sucursal Ajusco</b></h1><br/>\r\
					Carretera Picacho ajusco # 732, Col. Heroes de Padierna<br/><br/>Telefono(s); (01-55) 56-31-44-67<br/>\
					<a href="https://www.google.com/maps/dir//19.285401147542743,+-99.2182342589523/@19.2853719,-99.2195224,17.5z/data=!4m6!4m5!1m0!1m3!2m2!1d-99.2182343!2d19.2854011">Como llegar</a>',
		lat: 19.285401147542743,
		long: -99.2182342589523
	};

	var azcapotzalco = {
		info: '<h1><b>Sucursal Azcapotzalco</b></h1><br/>\r\
		San Isidro N° 260 Esq. Santiago Ahuizotla  Col: San Pedro Xalpa <br/>Azcapotzalco DF<br/>Telefono(s); (01-55) 55-61-36-41<br/>',
		lat: 19.48496375149837,
		long: -99.20861587624597
	};

	var abastos = {
		info: '<h1><b>Sucursal Central De Abastos</b></h1><br/>\r\
Embarcadero N° 19 Esq. Marcelino Buendia<br/>Col: Central De Abastos <br/>Iztapalapa D.F<br/><br/><br/>Telefono(s); 01(55) 56-94-67-88<br/>',
		lat: 19.37960473884989,
		long: -99.08027934210361
	};
	

	var chabacano = {
		info: '<h1><b>Sucursal Chabacano</b></h1><br/>Oriente 67-A N° 2803<br/><br/>Telefono(s); 01(55) 57-40-74-80<br/>',
		lat: 19.40854333726788,
		long: -99.1301658361416
	};
	
	var ermita = {
		info: '<h1><b>Sucursal Ermita</b></h1><br/>Ermita<br/>Aries N°3 Esq.Ermita Iztapalapa Col:Prado<br/>Iztapalapa DF<br/><br/>Telefono(s); 01(55 ) 56-72-85-49<br/>',
		lat: 19.35867998738545,
		long: -99.13277106888353
	};
	
	var iztacalco = {
		info: '<h1><b>Sucursal Iztacalco</b></h1><br/>Av.Te Esq. Con Trigo N° 61 Col: Granjas Mexico<br/>Telefono(s); 01(55) 56-50-54-94<br/>',
		lat: 19.393096700901054,
		long: -99.089394751915
	};
	
	var iztapalapa = {
		info: '<h1><b>Sucursal Iztapalapa</b></h1><br/>Calzada Ermita Iztapalapa N° 1613<br/>Col: Santa Cruz Meyehualco<br/>Telefono(s); 01(55) 56-92-15-35<br/>',
		lat: 19.343005469666483,
		long: -99.04111574603269
	};

	var villa = {
		info: '<h1><b>Sucursal La Villa</b></h1><br/>General Mariano Arista N° 206 Col: Martin Carrera<br/>Telefono(s); 01(55) 57-37-74-66<br/>',
		lat: 19.48983195653579,
		long: -99.1013427496681
	};

	var escobedo = {
		info: '<h1><b>Sucursal Mariano Escobedo</b></h1><br/>Mariano Escobedo N° 18 Col: Popotla<br/>Miguel Hidalgo DF<br/>Telefono(s); 01(55) 53-41-21-53<br/>',
		lat: 19.45531369846682,
		long: -99.18101655310971
	};
	
		var miramontes = {
		info: '<h1><b>Sucursal Miramontes</b></h1><br/>Calle Agave N° Esq. Canal De Miramontes<br/>Col: Jardines De Coyoacan Coyoacan DF<br/>Telefono(s); 01(55) 56-77-06-58<br/>',
		lat: 19.316683853355983,
		long: -99.12720811210284
	};
	
		var polanco = {
		info: '<h1><b>Sucursal Polanco</b></h1><br/>Mariano Escobedo 551 Col. Rincon del Bosque<br/>Telefono(s); (55) 5203 6666, 2489<br/>',
		lat: 19.429900512621142,
		long: -99.18056449986113
	};
	
		var revolucion = {
		info: '<h1><b>Sucursal Revolucion</b></h1><br/>Maria Luisa N° 5 Esq. Revolución Col: San Angel Inn<br/>Alvaro Obregon DF<br/>Telefono(s); 01(55) 56-16-23-30<br/>',
		lat: 19.351347575847083,
		long: -99.19067500259399
	};
	
		var jeronimo = {
		info: '<h1><b>Sucursal San Jeronimo</b></h1><br/>Av. San Jeronimo N° 630 Col: La Otra Banda<br/>Telefono(s); 01(55) 15-20-00-60<br/>',
		lat: 19.3300242735418,
		long: -99.20963594234922
	};
	
		var fe = {
		info: '<h1><b>Sucursal Santa Fe</b></h1><br/>Prolongación Paseo de la Reforma #71 Col Paseo de la Lomas<br/>Telefono(s); 01 (55) 5292 9160<br/>',
		lat: 19.369766361097707,
		long: -99.26641294277647
	};
	
		var vallejo = {
		info: '<h1><b>Sucursal Vallejo</b></h1><br/>Calz. Vallejo N° 497 Col:Defensores De La Republica<br/>Telefono(s); 01(55) 53-68-69-72<br/>',
		lat: 19.474425617302167,
		long: -99.14612553237151
	};
	
		var vertiz = {
		info: '</h1><br/>Dr. Jose Ma.Vertiz N° 1195 Col: Narvarte  <br/>Benito Juarez DF<br/>Telefono(s); 01(55) 56-05-81-81<br/>',
		lat: 19.378065586832157,
		long: -99.1537114274002
	};
	
		var yucatan = {
		info: '<h1><b>Sucursal Yucatan</b></h1><br/>Av. Yucatan #42 Col. Roma casi esq. con Av. Insurgentes<br/>Telefono(s); 01 (55) 5592 4293<br/>',
		lat: 19.415365281207553,
		long: -99.16489250075529
	};

	var locations = [
      [aeropuerto.info, aeropuerto.lat,aeropuerto.long, 0],
      [ajusco.info, ajusco.lat, ajusco.long, 1],
      [azcapotzalco.info, azcapotzalco.lat, azcapotzalco.long, 2],
	  [abastos.info, abastos.lat, abastos.long, 3],
	  [chabacano.info, chabacano.lat, chabacano.long, 4],
	  [ermita.info, ermita.lat, ermita.long, 5],
	  [iztacalco.info, iztacalco.lat, iztacalco.long, 6],
	  [iztapalapa.info, iztapalapa.lat, iztapalapa.long, 7],
	  [villa.info, villa.lat, villa.long, 8],
	  [escobedo.info, escobedo.lat, escobedo.long, 9],
	  [miramontes.info, miramontes.lat, miramontes.long, 10],
	  [polanco.info, polanco.lat, polanco.long, 11],
	  [revolucion.info, revolucion.lat, revolucion.long, 12],
	  [jeronimo.info, jeronimo.lat, jeronimo.long, 13],
	  [fe.info, fe.lat, fe.long, 14],
	  [vertiz.info, vertiz.lat, vertiz.long, 15],
	  [yucatan.info, yucatan.lat, yucatan.long, 16],

	  

    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
		center: new google.maps.LatLng(19.3391484, -99.2000568),
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
