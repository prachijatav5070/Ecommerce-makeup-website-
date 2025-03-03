import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import nv1 from '../images/head/minicon.png'
import nv2 from '../images/head/sale_icon.png'
import nv3 from '../images/head/face_2.webp'
import nv4 from '../images/head/lips_icon.png'
import nv5 from '../images/head/eyes_icon.png'
import nv6 from '../images/head/face_1.png'
import nv7 from '../images/head/nails_icon.webp'
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';

const Header_one = () => {
  return (
<>

<Navbar bg="light" data-bs-theme="light">
        <Container fluid>
          <Nav className="me-auto d-flex justify-content-center flex-wrap gap-4" style={{margin:'auto'}}>
            <Nav.Link as={Link} to="mini" style={{textAlign:'center'}}>
                 <img src={nv1} style={{width:'70px',height:'70px',borderRadius:'50%',objectFit:'cover'}} /> 
                 <p>Minis Corner</p>
            </Nav.Link>
            <Nav.Link as={Link} to="sale" style={{textAlign:'center'}}>
                 <img src={nv2} style={{width:'70px',height:'70px',borderRadius:'50%',objectFit:'cover'}} /> 
                 <p>Sale</p>
            </Nav.Link>
            <Nav.Link as={Link} to="face" style={{textAlign:'center'}}>
                 <img src={nv3} style={{width:'70px',height:'70px',borderRadius:'50%',objectFit:'cover'}} /> 
                 <p>Face</p>
            </Nav.Link>
            <Nav.Link as={Link} to="lips" style={{textAlign:'center'}}>
                 <img src={nv4} style={{width:'70px',height:'70px',borderRadius:'50%',objectFit:'cover'}} /> 
                 <p>Lips</p>
            </Nav.Link>
            <Nav.Link as={Link} to="eyes" style={{textAlign:'center'}}>
                 <img src={nv5} style={{width:'70px',height:'70px',borderRadius:'50%',objectFit:'cover'}} /> 
                 <p>Eyes</p>
            </Nav.Link>
            <Nav.Link as={Link} to="skin" style={{textAlign:'center'}}>
                 <img src={nv6} style={{width:'70px',height:'70px',borderRadius:'50%',objectFit:'cover'}} /> 
                 <p>Skin</p>
            </Nav.Link>
            <Nav.Link as={Link} to="nails" style={{textAlign:'center'}}>
                 <img src={nv7} style={{width:'70px',height:'70px',borderRadius:'50%',objectFit:'cover'}} /> 
                 <p>Nails</p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      {/* carosusel is here  */}
      <Banner/>
</>  )
}

export default Header_one