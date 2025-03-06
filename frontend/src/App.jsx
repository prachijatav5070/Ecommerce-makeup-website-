import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import AdminLayout from "./Components/Admincompo/AdminLayout";
import AdminLogin from "./AdminPages/AdminLogin";
import AdminDashboard from "./AdminPages/AdminDashboard";
import UploadProducts from "./AdminPages/UploadProducts";
import DisplayProduct from "./Website/DisplayProduct";
import ProductDetail from "./Website/ProductDetail";
import MinisCorner from "./Website/MinisCorner";
import Face from "./Website/Face/Face";
import Nails from "./Website/Nails/Nails";
import Skin from "./Website/Skin/Skin";
import Sale from "./Website/Sale/Sale";
import Lips from "./Website/Lips/Lips";
import Eyes from "./Website/Eye/Eyes";
import Signup from "./UserPages/Signup";
import Login from "./UserPages/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}

        <Route path="/" element={<Layout />}>
          <Route index element={<DisplayProduct />} />
          <Route path="displayproducts" element={<DisplayProduct />} />
          <Route path="proDetail/:id" element={<ProductDetail />} />
          <Route path="mini" element={<MinisCorner />} />
          <Route path="sale" element={< Sale />} />
          <Route path="face" element={<Face />} />
          <Route path="lips" element={<Lips />} />
          <Route path="eyes" element={<Eyes/>} />
          <Route path="skin" element={<Skin />} />
          <Route path="nails" element={<Nails />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Admin Routes with AdminLayout as a Wrapper */}
        <Route path="/admin" element={<AdminLogin />}>
          {" "}
        </Route>

        <Route path="/adminlayout" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="admindashboard" element={<AdminDashboard />} />
          <Route path="uploadproducts" element={<UploadProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;