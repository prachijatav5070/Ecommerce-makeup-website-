import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className='admin-container'>
     <div className="admin-right">
      <Link to='uploadproducts' style={{color:'black' , fontSize:'20px' ,textDecoration:'none'}}>Upload Product</Link>
      <br />
      <Link to='displayproducts' style={{color:'black' , fontSize:'20px' ,textDecoration:'none'}}>Display Product</Link>
     </div>
      <div className="admin-left">
     <Outlet/>
      </div>
    </div>
  )
}

export default AdminDashboard ;