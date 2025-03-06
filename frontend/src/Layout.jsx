import React from "react";
import Header from "./Components/Header";
import Header_one from "./Components/Header_one";
import { Outlet } from "react-router-dom";
// import DisplayProduct from "./Website/DisplayProduct";
const Layout = () => {
  return (
    <>
      <Header />
      <Header_one />
      {/* <DisplayProduct /> */}
      <Outlet />
    </>
  );
};

export default Layout;