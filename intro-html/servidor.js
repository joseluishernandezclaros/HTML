const http = require('http');


function sitioweb(req, res){
    res.writeHead(200, {"Content-Type": "text/html;"});
    /* res.end("Mi primer servidor"); */
    /* res.end("Mi <strong>segundo</strong> servidor"); */
    res.end(`
    <!DOCTYPE html>
<html>
<head>
    <title>Document</title>
    <meta charset="UTF-8"/>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header id="titulo">
        <h1>Blog de chanchito feliz</h1>
    </header>
    <section class="container">
        <article class="post">
            <h2>Título de mi post</h2>
            <p>Descripción de mi post</p>
            <img src="img/coffee.png" width="400" />
            <p>Texto del artículo que hay acá y es texto de prueba. Chanchito feliz!</p>
        </article>
        <article class="post">
            <h2>Título de mi post 2</h2>
            <p>Descripción de mi post 2</p>
            <img src="img/monster.png" width="400" />
            <p>Texto del artículo que hay acá y es texto de prueba. Chanchito feliz!</p>
        </article>
        <article class="post">
            <h2>Título de mi post 3</h2>
            <p>Descripción de mi post 3</p>
            <img src="img/guitarra.png" width="400" />
            <p>Texto del artículo que hay acá y es texto de prueba. Chanchito feliz!</p>
        </article>
    </section>
    <footer>
        <section>
            <a href="#titulo">Ir al comienzo</a>
            <a href="mailto:nicolas@gmail.com">Contáctame aquí</a>    
        </section>
         <p>Copyright 2021</p>
    </footer>
</body>
</html>


    `);
}

let servidor = http.createServer(sitioweb);

servidor.listen(7070, "192.168.1.17");

console.log("Servidor corriendo en el puerto 7070");

