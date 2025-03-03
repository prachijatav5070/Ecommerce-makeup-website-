import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import AdminLayout from "./Components/Admincompo/AdminLayout";
import AdminLogin from "./AdminPages/AdminLogin";
import AdminDashboard from "./AdminPages/AdminDashboard";
import UploadProducts from "./AdminPages/UploadProducts";
import DisplayProduct from "./Website/DisplayProduct";
import ProductDetail from "./Website/ProductDetail";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<Layout />}>

        <Route path="proDetail/:id" element={<ProductDetail/>} />

        </Route>

        {/* Admin Routes with AdminLayout as a Wrapper */}
        <Route path="/admin" element={<AdminLogin />}> </Route>
          
          <Route path="/adminlayout" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />}/>
          <Route path="admindashboard" element={<AdminDashboard />} />
          <Route path="uploadproducts" element={<UploadProducts />} />
          <Route path="displayproducts" element={<DisplayProduct/>} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
