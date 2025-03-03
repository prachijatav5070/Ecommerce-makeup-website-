import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const UploadProducts = () => {
  const [input, setInput] = useState({
    productname: "",
    productbrand: "",
    productcategory: "",
    productdescription: "",
    productquantity: "",
    productprice: "",
  });

  const [files, setFiles] = useState([]);

  // Handle file input
  const handleFileChange = (e) => {
    setFiles([...e.target.files]); // Ensure array format
  };

  // Handle text input
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Validation
    if (
      !input.productname ||
      !input.productcategory ||
      !input.productprice ||
      !input.productquantity ||
      !input.productdescription
    ) {
      alert("⚠️ Please fill all required fields!");
      return;
    }
    // Append product details
    for (let key in input) {
      formData.append(key, input[key]);
    } 
    // Append files
    if (files.length === 0) {
      alert("⚠️ Please upload at least one image.");
      return;
    }
    files.forEach((file) => formData.append("files", file));

    try {
      console.log("Uploading Product Data...", formData);
      let api = "http://localhost:8000/product/createproduct";
      const response = await axios.post(api, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("✅ Upload Response:", response.data);
      alert("🎉 Product uploaded successfully!");

      // Clear form after successful upload
      setInput({
        productname: "",
        productbrand: "",
        productcategory: "",
        productdescription: "",
        productquantity: "",
        productprice: "",
      });
      setFiles([]);

    } catch (error) {
      console.error("❌ Upload Error:", error.response?.data || error.message);
      alert("⚠️ Failed to upload product. Check the console for details.");
    }
  };

  return (
    <div className="upload_product">
      <Form style={{ width: "500px", background: "transparent" }} onSubmit={handleUpload}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" name="productname" value={input.productname} onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Brand</Form.Label>
          <Form.Select name="productbrand" value={input.productbrand} onChange={handleInput}>
            <option>Select Product Brand</option>
            <option value="Lakme">Lakmé</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Category</Form.Label>
          <Form.Select name="productcategory" value={input.productcategory} onChange={handleInput}>
            <option>Open this select menu</option>
            <option value="Lipstick">Lipstick</option>
            <option value="Foundation">Foundation</option>
            <option value="Eyeliner">Eyeliner</option>
            <option value="Mascara">Mascara</option>
            <option value="Compact Powder">Compact Powder</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Description</Form.Label>
          <Form.Control type="text" name="productdescription" value={input.productdescription} onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="text" name="productprice" value={input.productprice} onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control type="text" name="productquantity" value={input.productquantity} onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Upload Images</Form.Label>
          <Form.Control type="file" multiple onChange={handleFileChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UploadProducts;
