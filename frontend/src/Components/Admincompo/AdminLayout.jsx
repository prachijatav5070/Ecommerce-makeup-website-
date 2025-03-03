import React from 'react'
import AdminHeader from './AdminHeader'
import { Outlet } from 'react-router-dom'
import AdminFooter from './AdminFooter'

const AdminLayout = () => {
  return (
    <div className='admin-layout'>
        <AdminHeader/>
        <Outlet />
        <AdminFooter/>
    </div>
  )
}

export default AdminLayout