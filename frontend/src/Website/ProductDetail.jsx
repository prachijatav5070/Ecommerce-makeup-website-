import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import axios  from 'axios'

const ProductDetail = () => {
const { id } = useParams();
const [proData, setProData] = useState({});
const [bigImage, setBigImage] = useState("");
 
const loadData = async () => {
    let api = "http://localhost:8000/product/productdatashow";
    const response = await axios.post(api, { id: id });
    setProData(response.data);
    setBigImage(response.data.defaultImage);
    console.log(response.data);
  };

useEffect(() =>{
    loadData();
  }, [id]);

const myBigImage = (item) => {
    setBigImage(item);
  };

return (
    <>
      <Container>
        <Row className="justify-content-left">
          <Col style={{ display: "flex", justifyContent: "left" }}>
            <Card className="text-center justify-content-center m-3 "
              style={{ width: "20rem" }}>

              <Card.Img variant="top"
                src={`http://localhost:8000/${bigImage}`}
                style={{ height: "200px" }}/>
  

  
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                {proData.images && proData.images.length > 0 ? (
                  proData.images.map((item) =>(
                    <img  key={item}
                    style={{ cursor: "pointer" }}
                      onClick={() => {
                        myBigImage(item);
                      }}
                      src={`http://localhost:8000/${item}`}
                      width="50"
                      height="50"
                      alt="Product"
                    />
                  ))          
                ) : (
                  <p>No additional images available.</p>
                )}
              </div>
            </Card>
          </Col>
          <Col>
            <h2> Product name : {proData.productname} </h2>
            <h3 style={{ color: "blue" }}> Price: {proData.productprice}</h3>
            <h4> Category : {proData.productcategory} </h4>
            <h5> Description : {proData.productdescription} </h5>
            <Button variant="primary">Add to Cart</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
