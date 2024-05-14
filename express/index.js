/* import express from "express"
//console.log(express);

const app = express()

//El listen lo que hace es que habilita un puerto y lo pone a escuchar
app.listen(8080, () => {
    console.log('server of http://localhost')

})

app.get("/", (peticion, respuesta) => {
    respuesta.send("get desde express")
})

app.post("/", (peticion, respuesta) => {
    respuesta.send("post desde express")
}) */

import express from "express";
import path from "path";
import url from "url";
const app = express();
//el use funciona como un middleware. Es una funcion que se ejecuta en el medio
app.use(express.static('public')) 

const filename = url.fileURLToPath(import.meta.url)