/*Contador : Cada vez que alguien acceda a "/count" , la página, incrementa el contador. Muestra el número total de visitas en la página.*/

import express from "express";

const app = express();
let contador = 0;

app.get("/count", (peticion, respuesta) =>{
    console.log("Solicitud recibida en /count");
    contador++;
    respuesta.send("El contador es: " + contador);
})

app.listen(8080, () => {
    console.log("Server ok http://localhost:8080/count");
})