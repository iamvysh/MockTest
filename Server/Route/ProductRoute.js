const express=require('express')
const router=express.Router()

const Product=require("../Controller/ProductController")





router.post("/product/addproduct",Product.Addproduct)
router.get("/product/allproducts",Product.GetAllProducts)
router.get("/product/viewproduct/:id",Product.IndividualProduct)


module.exports=router