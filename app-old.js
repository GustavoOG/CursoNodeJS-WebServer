const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  //regresar archivo
  // res.setHeader( 'Content-Type' ,'attachment; filename=lista.csv');
  // res.writeHead(200, { 'Content-Type' : "application/csv"});
  
  res.write("Hola mundo!!");

  res.end();
});

server.listen(8080);

console.log(`Escuchando en el puerto ${8080}`);
