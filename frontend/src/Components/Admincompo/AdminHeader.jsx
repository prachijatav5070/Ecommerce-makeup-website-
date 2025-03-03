import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const AdminHeader = () => {
  return (
    <div>
      <Navbar style={{backgroundColor:'black', color:'white' , }} >
        <Container >
          <Navbar.Brand style={{ color:'white',textAlign:'center'}}>Lakme</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default AdminHeader