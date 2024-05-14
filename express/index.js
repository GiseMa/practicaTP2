import express from "express"
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
})

