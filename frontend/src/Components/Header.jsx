import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/head/logo.webp'


import { Link } from 'react-router-dom';
import { BsHandbag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoLogIn } from "react-icons/io5";

import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
<>
<Navbar className="gradient-navbar">
        <Container >
          <Navbar.Brand style={{fontSize:'15px' ,textAlign:'center'}}>  <marquee behavior="" direction="left"  >Brand link</marquee></Navbar.Brand>
        </Container>
      </Navbar>

      <Navbar className="gradient-navbar-lakme">
        <Container>
          <Navbar.Brand> <img src={logo} alt="brand logo" style={{margin:'auto'}} /> </Navbar.Brand>
          <div >
          <Navbar.Brand  > <CiSearch className='icons' style={{ fontSize:'28px' }}/> </Navbar.Brand>
          <Navbar.Brand as={Link} to="signup"> <CgProfile className='icons'/> </Navbar.Brand>
          <Navbar.Brand as={Link} to="login"> <IoLogIn className='icons'/> </Navbar.Brand>
          <Navbar.Brand > <BsHandbag className='icons'/> </Navbar.Brand>
          </div>
        </Container>
      </Navbar> 

      
<Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{  margin:'auto',gap:'30px'}}
            navbarScroll
          >
            <Nav.Link href="#action2 " className='link'>TRENDING NOW</Nav.Link>
            <NavDropdown title="CATEGORIES" id="navbarScrollingDropdown" className='link'>
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="trends" className='link'>TRENDS</Nav.Link>

            <NavDropdown title="ORDERS" id="navbarScrollingDropdown" className='link'>
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="HELP" id="navbarScrollingDropdown" className='link'>
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className='link' as={Link} to="mywishlist">MY WISHLIST</Nav.Link>

          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
</>  )
}

export default Header