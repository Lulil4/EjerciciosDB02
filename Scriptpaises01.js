var conn = new Mongo();

var baseDeDatos = conn.getDB("test");

var paisesColection = baseDeDatos.paises;

paisesColection.find({region:"Europe"}).forEach(printjson);
var myDateString = Date();
printjson(myDateString);
printjson( paisesColection.find({region:"Europe"}).count());
