import http from "node:http"
//console.log(http)

//recibe dos callback
const server = http.createServer((peticion, respuesta) => {
    if (peticion.method ==='POST'){
        respuesta.end("Hola, soy un Post");
        }else if (peticion.method ==='GET') {
    respuesta.end("Hola, soy un get");
}
   
});
//console.log(server);

server.listen(8080, () => (
    console.log("server ok localhost: 8080")
));
