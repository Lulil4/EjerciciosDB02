//Tabla personas 
var conn = new Mongo();
var dbPersonas = conn.getDB("personas");
var collectionPersonas = dbPersonas.personas;

//collectionPersonas.dropIndexes();
//1. Crear un índice en el campo “sueldo”. 

printjson(collectionPersonas.createIndex( 
	{
		sueldo:1
	}
));

//2. Crear un índice compuesto en los campos “nombre” y “apellido”.

printjson(collectionPersonas.createIndex( 
	{
		nombre:"text",
		apellido:"text"
	}
));

//3. Crear un índice en el campo “nombre” del array “empresa”. 

printjson(collectionPersonas.createIndex( 
	{
		"empresa.nombre":1,
	}
));

//4. Crear un índice compuesto en el campo “nombre” del array “empresa” y el campo “apellido”. 

printjson(collectionPersonas.createIndex( 
	{
		"empresa.nombre":1,
		apellido:-1
	}
));

//5. Listar todos los índices. 

printjson(collectionPersonas.getIndexes());

//6. Borrar todos los índices. 

printjson(collectionPersonas.dropIndexes());


//7. Crear un índice de nombre “persona” en los campos “nombre” y “apellido”. 

printjson(collectionPersonas.createIndex( 
	{
		nombre:"text",
		apellido:"text"
	},
	{
		name:"persona"
	}
));

//8. Borrar el índice de nombre “persona”. 

printjson(collectionPersonas.dropIndex("persona"));

//9. Crear un índice único sobre el campo “legajo”. 

printjson(collectionPersonas.createIndex( 
	{
		legajo:1
	},
	{
		unique:true
	}
));

//10. Crear un índice único sobre el campo “dni”. 

printjson(collectionPersonas.createIndex( 
	{
		"dni":1
	},
	{
		unique:true
	}
));

//11. Crear un índice de texto en el campo “nombre”. 

printjson(collectionPersonas.createIndex( 
	{
		"nombre":"text"
	},
	{
		unique:true
	}
));

//12. Crear un índice de texto en el campo “ciudad_nacimiento” y “departamento”. 

printjson(collectionPersonas.createIndex( 
	{
		ciudad_nacimiento:"text",
		departamento:"text"
	}
));

//13. Crear un índice de texto en el campo “apellido”, “email”, “ciudad_nacimiento” “ciudad_nacimiento” y
//“departamento”, con pesos de 10, 5, 2, 4 respectivamente y de nombre “indiceTexto”.

printjson(collectionPersonas.createIndex( 
		{
			apellido:"text",
			email:"text",
			ciudad_nacimiento:"text",
			departamento: "text"
		},
		{
			weights:{
			apellido:10,
			email:5,
			ciudad_nacimiento:2,
			departamento: 4,
			},

			name:"indiceTexto"
		}
	)
);