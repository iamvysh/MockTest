const Product=require("../Model/Product")
const mongoose=require("mongoose")


const Addproduct=async(req,res)=>{

    const {title,description,price,image}=req.body
    console.log("hy");
    try {
         const product=new Product({
            title:title,
            description:description,
            price:price,
            image:image
         })

         await product.save()

         res.status(200).json({
            message:"product added successfully"
         })




    } catch (error) {
        res.status(500).json({
            message:error,
        })
    }
}


const GetAllProducts=async(req,res)=>{
    try {
        const Products=await Product.find()
        res.status(200).json({
            Message:"success",
            Data:Products,
        })
    } catch (error) {
        res.status(500).json({
            message:error,
        })
    }
}

const IndividualProduct=async(req,res)=>{
    try {
        const id=req.params.id
        const product=await Product.findOne({_id:id})

        if(!product){
           return res.status(400).json({
                message:"no product found"
            })
        }

        res.status(200).json({
            message:"succeess",
            Data:product
        })
    } catch (error) {
        res.status(500).json({
            message:error,
        })
    }
}





module.exports={Addproduct,GetAllProducts,IndividualProduct}