const mongoose=require("mongoose");




const ProductSchema=new mongoose.Schema({
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        price:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        }
})


const Product=mongoose.model('Product',ProductSchema)
  
module.exports=Product

// description
// title
// image
// price