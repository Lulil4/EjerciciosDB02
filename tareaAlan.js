var conn = new Mongo();
var films1DB = conn.getDB("films1");
var films = films1DB.films;

//-> 1
printjson(films.aggregate([{$match:{$and:[{original_language:"it",popularity:{$gt:7}}]}}]).toArray());