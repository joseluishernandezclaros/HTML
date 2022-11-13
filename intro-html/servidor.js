const http = require('http');

function sitioweb(req, res){
    res.writeHead(200, {"Content-Type": "text/html;"});
    /* res.end("Mi primer servidor"); */
    /* res.end("Mi <strong>segundo</strong> servidor"); */
    res.end("como meto un html completo :c");
}

let servidor = http.createServer(sitioweb);

servidor.listen(7070, "192.168.1.17");

console.log("Servidor corriendo en el puerto 7070");

