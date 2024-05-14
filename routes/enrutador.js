import {Router} from "express";
import userRoutes from "./userRoutes.js";
import productRoutes from "./productRoutes.js";

const enrutador = Router();

enrutador.use("/usuarios", userRoutes);
enrutador.use("/productos", productRoutes);

export default enrutador;

//el enrutador se encarga de gestionar todas las rutas
