/*
	Ejercicios geo-espaciales.
	
	*AGREGO EJERCICIO 9, no lo había visto

	Morel, Melany Lucía.
*/

//1. Crear índices 2dsphere en las colecciones: containers, oceans, ships,
//countries y wines.

containers.createIndex({geometry:'2dsphere'})
oceans.createIndex({geometry:'2dsphere'})
ships.createIndex({geometry:'2dsphere'})
countries.createIndex({geometry:'2dsphere'})
wines.createIndex({geometry:'2dsphere'})

//2. Encontrar el nombre del país en el que está contenido el punto lat -2.112018,
//lng 9.748100.

db.countries.find({geometry:{$geoIntersects:{$geometry:{type:"Point",coordinates:[9.748100,-2.112018]}}}},{"properties.name":1}) //Gabon

//3. Encontrar cuantas bodegas existen a 200 kilómetros del punto
//-58.5737513, -34.6156537.

db.wines.find({geometry: {$near:{$geometry:{type : "Point", coordinates : [-58.5737513, -34.6156537], $maxDistance: 2000}}}},{"properties.name":1}).count() //1083

//4. Contar cuántas bodegas existen en el polígono dado. .

db.wines.find({ geometry:{ $geoWithin: { $geometry:{type : "Polygon", coordinates : [[[-51, -29], [-71, -29], [-71,-33], [-51, -33],[-51, -29]]]}}}}, {"properties.name":1}).count() //10

//5. Encontrar el nombre del mar/océano del punto
//[82.19970703125, 8.559293903302025].

db.oceans.find({ geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [82.19970703125, 8.559293903302025]}}}}, {name:1}) //Bay of Bengal

//6. Calcular cuántos barcos se encuentran a una distancia de 60 kilómetros del
//barco de nombre "MSC Zoe" que hayan sido construidos después del 2014.

db.ships.createIndex(location:"2dsphere")

var barco = db.ships.findOne({Name:"MSC Zoe"})
db.ships.find({location:{$near:{$geometry:barco.location,$maxDistance:60000}}},{Built:{$gt:2014}}).count() //1

//7. Contar cuantos containers hay en "Philippine Sea"

db.containers.createIndex(location:"2dsphere")

var sea = db.oceans.findOne({name:"Philippine Sea"})

db.containers.find({location:{$geoWithin:{$geometry:sea.geometry}}}).count() //39172
//8. Calcular los barcos suizos que están en el océano pacifico sur y sean
//de nacionalidad Suiza o Kuwaití.

var oceanoPacificoSur = db.oceans.findOne({name:"SOUTH PACIFIC OCEAN"})
db.ships.find({ location:{ $geoWithin: { $geometry: {type: "MultiPolygon", coordinates: oceanoPacificoSur.geometry.coordinates}}}, $or: [{ Country: "Switzerland" }, { Country: "Kuwait" }]}).count() //4

/*9-
Mostrar cuántos barcos hay en este polígono {
    "type": "Polygon",
    "coordinates": [[
[-66,-39],

[-71,-66],

[-55,-45],

[-31,-40],

[-66,-39]]]
}
*/

db.ships.find({location:{$geoWithin:{$geometry:{type: "Polygon", coordinates: [[[-66,-39],[-71,-66],[-55,-45],[-31,-40],[-66,-39]]]}}}}).count()