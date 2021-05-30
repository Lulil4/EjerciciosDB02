/*
conn = new Mongo();
db = conn.getDB("db2");

var stage = [];
stage.push({
	$lookup:{
		from:"containers",
		localField:"Name",
		foreignField:"shipName",
		as:"contenedores"
	}
});

stage.push({
	$out:"vista01"
});

var cursor = db.getCollection("ships").aggregate(stage);

printjson(cursor.toArray());

*/

/*
conn = new Mongo();
db = conn.getDB("db2");

db.ships.aggregate([
{
    $lookup:
    {
        from:'containers',
        foreignField:'shipName',
        as:'contenedores',
        localField:'Name'
    }
},
{
    $out:"vista02"
}
]);
*/

conn = new Mongo();
db = conn.getDB("db2");

db.ships.aggregate([{
    $lookup: {
        from: 'containers',
        as: 'contenedores',
        let: { shipName: "$Name" },
        pipeline: [
            {
                $match: {
                    $expr: {
                        $and: {
                            $eq: ['$shipName', '$$shipName']
                        }
                    }
                }
            },
            {
                $project: {
                    Tons: 1
                }
            }
        ]
    }
},
{
	$out:"vista03"
}
]);
