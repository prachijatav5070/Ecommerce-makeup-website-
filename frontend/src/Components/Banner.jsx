import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import b1 from '../images/head/banner1.webp'
import b2 from '../images/head/banner2.webp'
import b3 from '../images/head/banner3.webp'
const Banner = () => {
  return (
<>
<Carousel>
      <Carousel.Item>
        <img src={b1}  style={{width:"100%",height:"auto" ,objectFit:'cover'}} />
      </Carousel.Item>
      <Carousel.Item>
      <img src={b2} style={{width:"100%",height:"auto" ,objectFit:'cover'}}  />
      </Carousel.Item>
      <Carousel.Item>
      <img src={b3}  style={{width:"100%",height:"auto" ,objectFit:'cover'}} />
      </Carousel.Item>
    </Carousel>
</>  )
}

export default Banner