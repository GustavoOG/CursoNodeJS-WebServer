const express = require("express");
const app = express();
const port = 8080;

//Reemplaza contenido estatico por /
//Contenido estatico
app.use(express.static("public/templete/"));


// app.get("/", function (req, res) {
//   res.send("Pagina de inicio!!");
// });

app.get("/generic", function (req, res) {
  res.sendFile(__dirname + "/public/templete/generic.html");
});

app.get("/elements", function (req, res) {
  res.sendFile(__dirname + "/public/templete/elements.html");
});


app.get("*", function (req, res) {
    //Retonar un html
  res.sendFile(__dirname + "/public/templete/404.html");
  //res.send("Pagina no encontrada");
});

app.listen(port, () => {
  console.log(`aplicacion corriendo en puerto  ${port}`);
});
