/*Muestre la fecha actual en la página en la ruta "/fecha". Puedes utilizar el módulo express y moment para obtener la fecha actual.*/

import express from "express";
import moment from "moment"; 

const app = express();

app.get("/fecha", (peticion, respuesta) =>{
    console.log("Solicitud recibida en /fecha");
    let fecha = moment(new Date()).format("DD/MM/YY");
    respuesta.send("La fecha actual es: " + fecha);
})

app.listen(8080, () => {
    console.log("Server ok http://localhost:8080/fecha");
})

/*Servir un archivo HTML: estático en la ruta "/ ". 
Utiliza el middleware express.static para servir el archivo
 HTML desde una carpeta específica en tu proyecto.*/

/*  const app2 = express();

 app2.post("/index.html", (peticion, respuesta)=>{

 }
) */