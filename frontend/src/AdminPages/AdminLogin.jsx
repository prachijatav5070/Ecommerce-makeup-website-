import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {

    const [adminid , setAdminuser]=useState("");
    const [adminpassword , setAdminPassword]=useState("");
    
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
     try {
        let api="http://localhost:8000/admin/adminlogin";
        const response=await axios.post(api,{adminid:adminid,adminpassword:adminpassword})
        console.log(response.data);
        if(response.status===200){
          localStorage.setItem("adminid",response.data.adminid)
          localStorage.setItem("adminpassword",response.data.adminpassword)
          navigate("/adminlayout");
        }
      }catch (error) { 
        console.log(error);
     }
    }
  
  return (
    <>
       
      <div className='admin-login' style={{display:"flex", justifyContent:'center'}}>
      <Form style={{width:"300px" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ENTER ID</Form.Label>
        <Form.Control type="email" name='adminid' value={adminid} onChange={(e)=>{setAdminuser(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='adminpassword' value={adminpassword}  onChange={(e)=>{setAdminPassword(e.target.value)}}/>
      </Form.Group>
    
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
      </div>
    </>
  )
}

export default AdminLogin