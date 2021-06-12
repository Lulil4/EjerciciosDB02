//---------Base de datos Películas
//conn = new Mongo();
//db = conn.getDB("films1");
//peliculas = db.films;

//1. Mostrar la cantidad de películas por idioma 
/*
printjson(peliculas.aggregate(
		{
			$project: {original_language : 1}
		},
		{
			$group: {_id : "$original_language", cantidad : {$sum : 1}}
		}).pretty().toArray());
*/
//2. Mostrar la cantidad de películas que tiene más votos que el promedio. RESPUESTA: 16278 
/*
printjson(peliculas.aggregate(
		{
			$project: {nombre : "$original_title", votos: "$vote_count", promedio: "$vote_average"}
		},
		{
			$match: {
				$expr:{
					$gt:["$votos", "$promedio"]
				}
			}
		},
		{
			$count: "cantidad"
		}
		).pretty().toArray());
*/
//3. Mostrar los actores de la película más votada.	RESPUESTA: actores de inception

/*
printjson(peliculas.aggregate(
		{
			$project: {nombre : "$original_title", votos: "$vote_count", actores: "$cast"}
		},
		{
			$sort: { votos: -1 }
		},
		{
			$limit: 1
		}
		).pretty().toArray());
*/

//---------Base de datos de wines ,Containers y countries 
/*conn = new Mongo();

dbContainers = conn.getDB("db2");
db = conn.getDB("test");

wines = db.wines;
countries = db.countries;
containers = dbContainers.containers;
ships = dbContainers.ships;
*/
//4. ¿Cual es la bodega más cercana a la facu? 
/*
printjson(wines.find(
			{
			geometry: {
						$near:{
								$geometry: {type : "Point", coordinates : [-58.364859, -34.662456]}
							   }
					  }
		    },
		    {"properties.name":1}
		    ).toArray());
*/

//5. ¿Cuántos barcos hay en el mar argentino?  RESPUESTA: 2

//printjson(ships.find({location:{$geoWithin:{$geometry:{type: "Polygon", coordinates: [[[-66,-39],[-71,-66],[-55,-45],[-31,-40],[-66,-39]]]}}}}).count());

//6. Podemos saber qué países están a menos de 2000km de la facu? RESPUESTA: Arg, uruguay, brazil, paraguay, chile, bolivia, fakland islands, peru...
/*
printjson(countries.find(
			{
			geometry: {
						$near:{
								$geometry: {type : "Point", coordinates : [-58.364859, -34.662456]}
							   }
					  }
		    },
		    {"properties.name":1}
		    ).limit(8).toArray());
*/
//Base de datos repaso 
//conn = new Mongo();
//test = conn.getDB("test");

//1. Crear un usuario con roles de administrador 
/*
test.createUser( 
 { 
 user: "usuarioAdministradorRepaso", 
 pwd: "admin", 
 roles: [ { role: "dbAdmin", db: "admin" }] 
 } 
) 
*/

//7. Crear un rol de nombre all con los roles read y readWrite. 
/*
test.createRole(
	{
		role: "allRepaso",
		privileges: [
			{
				resource: {db: "test", collection: ""},
				actions: ["find"]
			}
		],
		roles: [
			{
				role: "read",
				db: "test"
			},
			{
				role: "readWrite",
				db: "test"
			}
		]
	}
)*/