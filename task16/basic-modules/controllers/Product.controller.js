const { GetProducts } = require("../services/Product.service")

const productsContr=async(req,res)=>{
    const products=await GetProducts();
    res.status(200).json({products});
}

module.exports={
    productsContr
}