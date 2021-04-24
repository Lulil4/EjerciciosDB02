//1. Crear un índice de texto sobre los campos overview, original_tittle, title, cast.character y cast.name, con pesos de 10, 10, 5, 5, 3. 
//var conn = new Mongo();
//var dbPeliculas = conn.getDB("films1");
//var collectionPeliculas = dbPeliculas.films;

/*
collectionPeliculas.createIndex( 
	{
		overview:"text",
		original_title:"text",
		title:"text",
		"cast.character":"text",
		"cast.name":"text"
	},
	{
		weights:{
			overview:10,
			original_title:10,
			title:5,
			"cast.character":5,
			"cast.name":3
		},

		name:"Ejercicio01"
		
	}
);
*/
//2. Que cantidad de resultados obtendremos si buscamos la palabra “alien”. 

//printjson(collectionPeliculas.find({$text: { $search:"alien"}}).count()); //103

//3. Cuantos resultados arrojara la búsqueda de 'Nikki Duval'.

//printjson(collectionPeliculas.find({$text: { $search:"Nikki Duval"}}).count()); //387

//4. Cuantos resultados arrojara la búsqueda de 'duval'. 

//printjson(collectionPeliculas.find({$text: { $search:"duval"}}).count()); //194

//5. Cuantos resultados arrojara la búsqueda de 'duval' y la omisión de ‘nikki’. 

//printjson(collectionPeliculas.find({$text: { $search: "duval -nikki"}}).count()); //192

//6. Cuantos resultados habrá si buscamos exactamente la frase 'Nikki Duval'. 

//printjson(collectionPeliculas.find({$text: { $search:"\"Nikki Duval\""}}).count()); //1

//7. Mostrar el título en español del primer documento encontrado si buscamos “duro de matar” 

//printjson(collectionPeliculas.find({$text: { $search:"\"duro de matar\""}})[0].title);


//8. Mostrar el título y el puntaje calculado por mongo del resultado anterior. 
/*
var pelicula0 = collectionPeliculas.findOne(
	{
		$text: { $search:"\"duro de matar\""}
	},
    { 
        score: { $meta: "textScore" } 
    }
);

printjson(pelicula0.title);

printjson(pelicula0.score); // 20.796370967741932
*/

//9. Ordenar por puntaje de manera descendente la búsqueda del punto anterior. 
/*
collectionPeliculas.find(
	{
		$text: { $search:"\"duro de matar\""}
	},
    { 
        score: { $meta: "textScore" } 
    }
).sort( 
	{ 
		score: { $meta: "textScore" } 
	} 
).forEach(printjson);
*/
//10. Que cantidad de resutlados obtendremos si buscamos “Inglês “? 

//printjson(collectionPeliculas.find({$text: { $search:"Ingles"}}).count()); //17

//11. Si repetimos la búsqueda anterior pero en idioma francés, cuántos resultados obtendremos? 

//printjson(collectionPeliculas.find({$text: { $search:"francés"}}).count()); //129

//12. Si repetimos la búsqueda del punto 10, pero teniendo en cuenta la tilde diacrítica, cuántos resultados obtendremos?

//printjson(collectionPeliculas.find({$text: { $search:"Inglés"}}).count()); //134