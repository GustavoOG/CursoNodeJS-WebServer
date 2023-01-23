
require('dotenv') .config();
const express = require("express");
const hbs = require('hbs');
 
const app = express();
const port = process.env.PORT || 8080;

require('./hbs/helpers');

// Express HBS engine
//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/parciales');


//Contenido estatico
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", { nombre: "Gustavo Ortiz", titulo: "Curso de Node" });
});

app.get("/generic", function (req, res) {
  res.render("generic", { nombre: "Gustavo Ortiz", titulo: "Curso de Node" });
});

app.get("/elements", function (req, res) {
  res.render("elements", { nombre: "Gustavo Ortiz", titulo: "Curso de Node" });
});
app.listen(port, () => {
  console.log(`aplicacion corriendo en puerto  ${port}`);
});
