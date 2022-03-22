import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Title } from "../title/Title";

export const Contact = () => {
  return (
    <section id="contact">
      <Container>
      <Row>
          <Title title="Contact" />
        </Row>
        <Row className='my-5'>          
          <Col md="2  display-2"><a href="#"><i className="fa-brands fa-react"></i></a></Col>
          <Col md="2 display-2"><a href="#"><i className="fa-brands fa-react"></i></a></Col>
          <Col md="2  display-2"><a href="#"><i className="fa-brands fa-react"></i></a></Col>
          <Col md="2 display-2"><a href="#"><i className="fa-brands fa-react"></i></a></Col>
          <Col md="2 display-2"><a href="#"><i className="fa-brands fa-react"></i></a></Col>
          <Col md="2 display-2"><a href="#"><i className="fa-brands fa-react"></i></a></Col>
        </Row>
      </Container>
    </section>
  )
}
