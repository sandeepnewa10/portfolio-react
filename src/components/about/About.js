import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Header } from "../layouts/Header";
import { Title } from "../title/Title";
import image1 from "../../assets/image1.png";

export const About = () => {
  return (
   <>
    <section id="about" className="my-5 bg-gray mx-2 py-5">
      <Container>
      <Row>
          <Title title="About US" />
        </Row>
        <Row>
          <Col md="6"> <img src={image1} className="img-fluid" /></Col>
          <Col md="6">           
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et officiis ducimus a qui eligendi architecto error deleniti earum, illum quae, maiores facere? Dicta, ipsam sit!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et officiis ducimus a qui eligendi architecto error deleniti earum, illum quae, maiores facere? Dicta, ipsam sit!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et officiis ducimus a qui eligendi architecto error deleniti earum, illum quae, maiores facere? Dicta, ipsam sit!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et officiis ducimus a qui eligendi architecto error deleniti earum, illum quae, maiores facere? Dicta, ipsam sit!</p>
          </Col>
        </Row>
      </Container>
    </section>
   
   </>
  )
}
