// Nodejs podemos levantar servidores, para desarrollo del backend y unirlo con un frontend
// para poder hacerlo realizamos un levantamiento del mismo

// mediante la constante http y con los argumentos node:http
const http = require('node:http');

//conta la constante hostname; y port, ingresaremos el host al cual n os conectaremo
// y el puerto 3000 o el que elijamos
const hostname = '127.0.0.1';
const port = 8000;

//para poder levantar nuestro servidor inicializaremos con la constante server
// inicializamos la conexion http; la cual nos dara la recepcion y envio de la informacion
const server = http.createServer((req, res) => {
    //ingresaresmo el estatus 200
    res.statusCode = 200
    //que el contenido sea un tipo - texto plano
    res.setHeader('content-type', 'text/plain');
    //y la respuesta sea Hola Muno!
    res.end('Hola Mundo!');

});

//mandaresmoa a escuchar nuestro respuesta al hostname
server.listen(port, hostname, () =>{
    //y con el console, mandaremos a imprimir
    //utilizando `` estas comillas o apostrofe; nos generara la conexion, ya que nos resalta las constantes previamente creadas
    console.log( `Servidor corriendo en el puerto: http://${hostname}:${port}/`)
});

//De esta forma podemos levanatar un seridor con Node JS