const express = require("express");
const app = express();
const port = 8080;

//Reemplaza contenido estatico por /
//Contenido estatico
app.use(express.static("public"));


// app.get("/", function (req, res) {
//   res.send("Pagina de inicio!!");
// });

app.get("/hola-mundo", function (req, res) {
  res.send("Hola mundo en ruta!!");
});

app.get("*", function (req, res) {
    //Retonar un html
  res.sendFile(__dirname + "/public/404.html");
  //res.send("Pagina no encontrada");
});

app.listen(port, () => {
  console.log(`aplicacion corriendo en puerto  ${port}`);
});
