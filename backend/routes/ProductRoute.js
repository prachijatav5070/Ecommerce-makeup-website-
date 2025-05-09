const express = require("express");
const route = express.Router();

// for multer code 
const multer=require('multer');
const path=require('path');

const ProductController = require("../Controllers/ProductController")

//set storage engine for multer
// Set storage engine for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'Images/'); // Set the folder where files will be saved
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`); // Save file with a unique name
    },
  });
  
  // File filter for allowed extensions (optional)
  const fileFilter = (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png|webp|pdf/;
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype);
  
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, PNG, and PDF are allowed.'));
    }
  };
  
  // Multer middleware configuration
  const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit files to 5MB
  });



route.post("/createproduct",upload.array('files',10) , ProductController.CreateProduct);
route.get('/Displayproduct',ProductController.DisplayProduct)
route.post("/productdatashow", ProductController.ProductDataShow)
route.get("/Specificproductdisplay",ProductController.SpecificProductDisplay)
module.exports=route;