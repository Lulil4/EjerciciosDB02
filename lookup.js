/*
EJERCICIOS LOOKUP

Morel, Melany Lucía.
*/
/*
conn = new Mongo();
db = conn.getDB("db2");
*/
//1. Traer todos los barcos con un array “cargo” con los contenedores que transporta.
/*
db.ships.aggregate([{
    $lookup: {
		from:"containers",
		localField:"Name",
		foreignField:"shipName",
		as:"cargo"
    }
},
{
	$out:"vistaEjercicio1"
}
]);
*/
//2. Traer el barco de nombre “MSC Zoe” con un array “cargo” con todos sus containers.
/*
db.ships.aggregate([
    {
        $match: { Name: "MSC Zoe" }
    },
    {
    $lookup: {
		from:"containers",
		as:"cargo",
        foreignField:"shipName",
        localField:"Name",
    }
},
    {
        $out:"vistaEjercicio2"
    }
]);
*/
//3. Traer todos los barcos que sean de Switzerland con sus contenedores.
/*
db.ships.aggregate([
    {
        $match: { Country: "Switzerland" }
    },
    {
    $lookup: {
        from:"containers",
        as:"cargo",
        foreignField:"shipName",
        localField:"Name",
    }
},
    {
        $out:"vistaEjercicio3"
    }
]);
*/


//4. Calcular la cantidad de contenedores que transporta el buque “MSC Zoe”.
/*
printjson(db.ships.aggregate([
    {
        $match: { Name: "MSC Zoe" }
    },
    {
        $lookup: {
            from:"containers",
            as:"cargo",
            foreignField:"shipName",
            localField:"Name",
        }
    },
    {
        $project: {contadorContenedores: { $size: "$cargo" }}
    }
]).toArray()); //11372
*/
//5. Traer todos los barcos y la cantidad de contenedores que transporta cada uno y
//ordenarlo de mayor a menor.
/*
printjson(db.ships.aggregate([
    {
        $lookup: {
            from:"containers",
            as:"cargo",
            foreignField:"shipName",
            localField:"Name",
        }
    },
    {
        $project: {barco: "$Name", contadorContenedores: { $size: "$cargo" }}
    },
    {
        $sort: { contadorContenedores: -1 }
    }
]).toArray());
*/
//6. Calcular el promedio de toneladas de los containers que transporta cada barco de
//nacionalidad “China”.
/*
printjson(db.ships.aggregate([
    {
        $match: { Country: "China" }
    },
    {
        $lookup: {
            from:"containers",
            as:"cargo",
            foreignField:"shipName",
            localField:"Name",
        }
    },
    {
        $project: {_id:"$Name", promedioTonsContainers: {$avg: "$cargo.Tons"} }
    }
]).toArray());
*/
//7. Calcular el promedio de toneladas de los containers que transportan los barcos de
//nacionalidad “China”.
/*
printjson(db.ships.aggregate([
    {
        $match: { Country: "China" }
    },
    {
        $lookup: {
            from:"containers",
            as:"cargo",
            foreignField:"shipName",
            localField:"Name",
        }
    },
    {
        $project: {_id:"$Name", promedioTonsContainers: {$avg: "$cargo.Tons"} }
    },
    {
        $group: {_id: "Barcos", promedioTonsGeneral : {$avg: "$promedioTonsContainers"}}
    }
]).toArray());
*/
//8. Calcular el promedio de toneladas de los tipos de containers que transporta cada
//barco de nacionalidad “China”
/*
printjson(db.ships.aggregate([
    {
        $match: { Country: "China" }
    },
    {
        $lookup:
        {
           from:'containers',
           as:'cargo',
           let: { barco: "$Name" },
           pipeline: [
               {
                   $match: {
                       $expr: {
                           $and: {
                               $eq: ['$shipName', '$$barco']
                           }
                       }
                   }
               },
               {
                    $group: {_id: "$type", promTonsTipo: {$avg: "$Tons"}}
               }
           ],
        }
    }
]).toArray());
*/

//9. Calcular el promedio de “Length overall (m)” de los barcos según país de
//origen(route) y la cantidad de contenedores que transportan.
/*
printjson(db.ships.aggregate([
{
 $lookup:{
     from: "containers", 
     as: "cargo", 
     localField: "Name",
     foreignField: "shipName"},
 },
 {
    $project: {
        route:1, "Length overall (m)":1, contenedores: {$size: "$cargo"}
    }
},
{
    $group: {
        _id: "$route.origin.Country", longitud: {$avg:"$Length overall (m)"}, contenedores: { $sum: "$cant" } 
    }
} 
]).toArray());
*/
//10. Calcular la cantidad de contenedores transportados por barcos chinos que están a
//una distancia máxima de 800 km del punto [129.15693498213182,
//18.108558232731916].
/*
db.ships.dropIndexes();
db.ships.createIndex({location:"2dsphere"});

printjson(db.ships.aggregate([
{
  $geoNear:{near:{type : "Point", coordinates : [129.15693498213182, 18.108558232731916]}, distanceField:"distancia", maxDistance:800000}
},
{
    $match: { Country: "China"}
},
{
    $lookup: {
        from:"containers",
        as:"cargo",
        foreignField:"shipName",
        localField:"Name",
    }
},
{
     $project: {cantContenedores: {$size: "$cargo" }}
},
{
    $group: {_id: "barcos", sumaContenedores: {$sum: "$cantContenedores"}}
}
]).toArray()); // 7629
*/
