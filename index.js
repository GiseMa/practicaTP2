import express from "express";
import enrutador from "./routes/enrutador.js";

const app = express();

/* Middleware de express */
app.use(express.json)
app.use(express.urlencoded({extended: true}))

app.use(enrutador);


app.listen(8080, ()=>{
    console.log("Server ok");
})