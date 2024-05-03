import{Router} from "express";

const productRoutes = Router(); //Esta variable permite hacer el get

productRoutes.get("/", (req, res)=>{
    res.send("get all desde product routes")
}
)

export default productRoutes;