const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productname: { type: String, required: true },
  productbrand: { type: String },
  productcategory: { type: String, required: true },
  productquantity: { type: Number, required: true },
  productprice: { type: Number, required: true }, // 🛠️ Ensure this field exists
  productdescription: { type: String, required: true },
  images: { type: [String], required: true },
  defaultImage: { type: String },
});

const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
 