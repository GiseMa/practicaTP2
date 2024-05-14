import{Router} from "express";

const userRoute = Router(); //Esta variable permite hacer el get

userRoutes.get("/", (req, res)=>{
    res.send("get all desde user routes")
}
)

userRoutes.post("/users", (req, res)=>{
    res.send("Post desde rutas usuarios")
})

export default productRoutes;