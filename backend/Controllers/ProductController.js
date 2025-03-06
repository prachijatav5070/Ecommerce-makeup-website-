const ProductModel = require("../Models/ProductModel");

const CreateProduct = async (req, res) => {
  try {
    // 🛠️ Debugging logs
    console.log("Received Files:", req.files);
    console.log("Received Data:", req.body);

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded!" });
    }

    const imageUrls = req.files.map((file) => file.path); // 🛠️ Ensure correct multer path

    // 🛠️ Check if required fields exist
    const { productname, productbrand, productcategory, productquantity, productdescription, productprice } = req.body;
    if (!productname || !productcategory || !productprice || !productquantity || !productdescription) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // ✅ Create product in MongoDB
    const product = await ProductModel.create({
      productname,
      productbrand,
      productcategory,
      productquantity,
      productprice, // 🛠️ Ensure this field is included
      productdescription,
      images: imageUrls,
      defaultImage: imageUrls[0],
    });

    console.log("🟢 Product Created:", product);
    res.status(200).json({ message: "Product created successfully!", product });
  } catch (error) {
    console.error("❌ Server Error:", error);
    res.status(500).json({ message: "File upload failed!", error: error.message });
  }
};

const DisplayProduct=async(req,res)=>{
    try {
       const products=await ProductModel.find();
       res.status(200).json({products}); 
    } catch (error) {
        console.error('Error fetching products:',error);
        res.status(500).json({message:'failed to fetch products',error: error.message})
    }
}

const ProductDataShow= async(req,res)=>{
  const Product=await ProductModel.findById(req.body.id);
  res.status(200).send(Product);
}

const SpecificProductDisplay=async(req,res)=>{
  const {productcategory}=req.query;
  const Data=await ProductModel.find({productcategory : productcategory});
  res.send({Data});
}

module.exports = { CreateProduct ,
                   DisplayProduct, 
                   ProductDataShow,
                   SpecificProductDisplay};
