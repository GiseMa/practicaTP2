/*Servir un archivo HTML: estático en la ruta "/ ". 
Utiliza el middleware express.static para servir el archivo
 HTML desde una carpeta específica en tu proyecto.*/

 import express from "express";
 import path from "path";
 import url from "url";
 const app = express();
 //el use funciona como un middleware. Es una funcion que se ejecuta en el medio
 app.use(express.static('public')) 

 const __filename = url.fileURLToPath(import.meta.url)
 const __dirname = path.dirname(filename);
 

 app.get("/:archivo", (petic, rta)=>{
    rta.sendFile(path.join(__dirname, "public", "index.html"));
 })

app.listen(8080, () => {
    console.log("Server ok http://localhost:8080/archivo");
})


