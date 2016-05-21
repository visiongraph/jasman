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
	
	var Pachuca = {
		info: '<h1><b>Sucursal Pachuca</b></h1><br/>Av. Alta Tencion N° 109 Col: Santa Julia <br/>Telefono(s); 01(771) 71-47-912<br/>',
		lat: 20.1152114,
		long: -98.75355289999999
	};
	
	
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
	
	
	var Cuautla = {
		info: '<h1><b>Sucursal Cuautla</b></h1><br/>San Martin (Calle Reforma) N° 45  Col: Centro <br/>Telefono(s); 01(735 ) 3-52-00-72<br/>',
		lat: 18.81559044454351,
		long: -98.95034144652709
	};
	
	var Guanajuato = {
		info: '<h1><b>Sucursal Tepic</b></h1><br/>xalisco-tepic  105, Col. Caja de Agua<br/>Telefono(s); (311) 2139868<br/>',
		lat: 21.495555798942668,
		long: -104.8966864390701
	};
	
	

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

	
	var Queretaro = {
		info: '<h1><b>Sucursal Queretaro</b></h1><br/>Ezequiel Montes Sur #164 Col. El Carrizal C.P. 76030<br/>Telefono(s); 4422166356, 2168572<br/>',
		lat: 20.58560014331326,
		long: -100.39632498732152
	};

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
	  [Alamedas.info, Alamedas.lat, Alamedas.long, 17],
      [Aragon.info, Aragon.lat, Aragon.long, 18],
      [Chalco.info, Chalco.lat, Chalco.long, 19],
	  [Coacalco.info, Coacalco.lat, Coacalco.long, 20],
	  [Cuautitlan.info, Cuautitlan.lat, Cuautitlan.long, 21],
	  [Interlomas.info, Interlomas.lat, Interlomas.long, 22],
	  [Verdes.info, Verdes.lat, Verdes.long, 23],
	  [Reyes.info, Reyes.lat, Reyes.long, 24],
	  [Nezahualcoyotl.info, Nezahualcoyotl.lat, Nezahualcoyotl.long, 25],
	  [Texcoco.info, Texcoco.lat, Texcoco.long, 26],
	  [Texcoco2.info, Texcoco2.lat, Texcoco2.long, 27],
	  [Toluca1.info, Toluca1.lat, Toluca1.long, 28],
	  [Toluca2.info, Toluca2.lat, Toluca2.long, 29],
	  [Zumpango.info, Zumpango.lat, Zumpango.long, 30],
      [Guanajuato.info, Guanajuato.lat, Guanajuato.long, 31],
      [Hidalgo.info, Hidalgo.lat, Hidalgo.long, 31],
      [Irapuato.info, Irapuato.lat, Irapuato.long, 32],
	  [Morelos.info, Morelos.lat, Morelos.long, 33],
	  [Salamanca.info, Salamanca.lat, Salamanca.long, 34],
	  [Isidro.info, Isidro.lat, Isidro.long, 35],
	  [Bosco.info, Bosco.lat, Bosco.long, 36],
	  [Landa.info, Landa.lat, Landa.long, 37],
      [Pachuca.info, Pachuca.lat, Pachuca.long, 38],	  
      [GDL.info, GDL.lat, GDL.long, 39],
      [Americas.info, Americas.lat, Americas.long, 40],
      [Belisario.info, Belisario.lat, Belisario.long, 41],
	  [Calzada.info, Calzada.lat, Calzada.long, 42],
	  [Mina.info, Mina.lat, Mina.long, 43],
	  [Mateos.info, Mateos.lat, Mateos.long, 44],
	  [Ocotlan.info, Ocotlan.lat, Ocotlan.long, 45],
	  [Patria.info, Patria.lat, Patria.long, 46],
	  [Vallarta.info, Vallarta.lat, Vallarta.long, 47],
	  [Revolucion.info, Revolucion.lat, Revolucion.long, 48],	  
      [Losreyes.info, Losreyes.lat, Losreyes.long, 49],
      [Sahuayo.info, Sahuayo.lat, Sahuayo.long, 50],
      [Eureka.info, Eureka.lat, Eureka.long, 51],
	  [Uruapan.info, Uruapan.lat, Uruapan.long, 52],
	  [Jardinadas.info, Jardinadas.lat, Jardinadas.long, 53],
	  [Juarez.info, Juarez.lat, Juarez.long, 54],	  
      [Cuautla.info, Cuautla.lat, Cuautla.long, 55],	  
      [Guanajuato.info, Guanajuato.lat, Guanajuato.long, 56],	  
      [Abastos.info, Abastos.lat, Abastos.long, 57],
      [Central.info, Central.lat, Central.long, 58],
      [Chapultepec.info, Chapultepec.lat, Chapultepec.long, 59],
	  [Cigarrera.info, Cigarrera.lat, Cigarrera.long, 60],
	  [Contry.info, Contry.lat, Contry.long, 61],
	  [Diaz.info, Diaz.lat, Diaz.long, 62],
	  [Juarez.info, Juarez.lat, Juarez.long, 63],
	  [Torres.info, Torres.lat, Torres.long, 64],
	  [Lincoln.info, Lincoln.lat, Lincoln.long, 65],
	  [Vista.info, Vista.lat, Vista.long, 66],
	  [Primavera.info, Primavera.lat, Primavera.long, 67],
	  [Nicolas.info, Nicolas.lat, Nicolas.long, 68],
	  [Universidad.info, Universidad.lat, Universidad.long, 69],
	  [Valle.info, Valle.lat, Valle.long, 70],
      [Queretaro.info, Queretaro.lat, Queretaro.long, 71],
      [Laredo.info, Laredo.lat, Laredo.long, 72],
	  [Reynosa.info, Reynosa.lat, Reynosa.long, 73],
	  	  
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 5,
		center: new google.maps.LatLng(20.159959507342285, -98.69468382065431),
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
