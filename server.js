
var http= require ('http');

var server= http.createServer(function (request, response) {

	 response.writeHead(200, {'Content-Type':'text/plain'});
	 response.end('Conectado a server...\n');

	
});



server.listen(8000, '127.0.0.1');
console.log("Arranque de Servidor en 127.0.0.1:8000");