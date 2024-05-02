/*Servir un archivo HTML: estático en la ruta "/ ". 
Utiliza el middleware express.static para servir el archivo
 HTML desde una carpeta específica en tu proyecto.*/

 import express from "express";
 import path from "path";
 const app = express();


 app.use('/public', express.static(path.join(__dirname, 'public')))


app.listen(8080, () => {
    console.log("Server ok http://localhost:8080/fecha");
})


 