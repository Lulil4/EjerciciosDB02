const express = require('express')
const bodyParser= require('body-parser')
const app = express()
// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'personas'
let db
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)

  // Storing a reference to the database so you can use it later
  db = client.db(dbName)
  console.log(`Connected MongoDB: ${url}`)
  console.log(`Database: ${dbName}`)
})

app.listen(3000, function() {
console.log('listening on 3000')
})
// We normally abbreviate `request` to `req` and `response` to`res`.
/*app.get('/', function (req, res) {
  res.send('Bienvenidos a express')
})*/
app.get('/', (req, res) => {
 res.json({rta: "Hola"});
// Note: __dirname is directory current directory you're in.Try logging it and see what you get!
// Mine was '/Users/zellwk/Projects/demo-repos/crud-expressmongo' for this app.
})
app.get('/mensaje', (req, res) => {
  console.log('Hellooooooooooooooooo!');
  console.log(req.body)
})


app.get('/personas', (req, res) => {
  db.collection('users').find().toArray()
    .then(usuarios => {
      res.json(usuarios)
    })
    .catch(/* ... */)
})

app.get("/usuarios/agregar", (req, res) => {
        //let usu = JSON.parse(req.params.usuario);
        let usu = db.collection('users').insertOne({usuario: "raul", email: "raul@raul.com", clave: "123", foto: "miFoto.jpg"});
        res.json(usu);
});

app.get("/usuarios/listar/:nombre", (req, res) => {
  let arrayUsu = [];
  let nombre = req.params.nombre;
  db.collection('users').find({"usuario": nombre}).forEach(item => {
    arrayUsu.push(item);
  }, err => {
    if(err){
      console.log(err);
    }
    res.json(arrayUsu);
  })
});