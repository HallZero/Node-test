const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const Post = require("./models/Post");
const { sequelize } = require("./models/db");

//Config
//Template engine
//app.set('view engine', 'html');
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Rotas

app.get("/", function(req,res){
    res.send("Seja bem vindo ao meu app!");
});

app.get("/cad", function (req, res) {
   res.sendFile(path.join(__dirname + "/views/forms.html"));
});

app.post("/add", function (req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(function () {
      res.redirect("/showdatabase");
    })
    .catch(function (error) {
      res.send("Houve um erro: " + error);
    });
  //res.send('Texto: ' + req.body.titulo + 'Conteudo: ' + req.body.conteudo);
});

app.get("/showdatabase", async (req, res, next) => {
    var query = "SELECT * FROM postagens ORDER BY id";
    var result = await sequelize.query(query);
    if (!result) {
      throw result;
    } else {
  
      res.render("index", {
        title: "Node.js MySQL CRUD Application",
        action: "list",
        sampleData: result,
      });
    }
  });


app.listen(8081, function () {
  console.log("Servidor rodando na URL http://localhost:8081");
});

//Função de CallBack é uma função que é executada toda vez que algum evento acontece
//Rota é um caminho para a aplicação
/*
app.get('/', function(req, res){
    res.sendFile('C:/Users/filip/OneDrive/Documentos/Node Test/html/index.html');
    //res.send('Seja bem vindo ao meu app!');
});

app.get('/sobre', function(req, res){
    res.send('Minha pagina sobre');
});

app.get('/blog', function(req, res){
    res.send('Seja bem vindo ao meu blog!');
});

//A função send só pode ser chamada uma única vez por rota

app.get('/ola/:nome/:cargo', function(req, res){
    res.send('Olá ' + req.params.nome + '<h2> Seu cargo é: ' + req.params.cargo + '</h2>');
    //res.send('<h2> Seu cargo é: ' + req.params.cargo + '</h2>');
});
*/

/*const http = require('http');

http.createServer(function(req, res){
    res.end('Ola');
}).listen(8081);

console.log('O servidor esta rodando!');*/
// es.end('Ola');
// }).listen(8081);

// console.log('O servidor esta rodando!');*/
