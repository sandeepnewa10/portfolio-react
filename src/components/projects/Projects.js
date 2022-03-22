import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "../title/Title";

import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";

export const Projects = () => {
  return (
    <section id="projects">
      <Container>
        <Row>
          <Title title="Projects" />
        </Row>
        <Row className="mb-5">
          <Col md="6">
            <img src={image2} className="img-fluid rounded" />
          </Col>
          <Col md="6">
            <h3>Projecte Title</h3>
            <div className="link">
              <a href="#sent_to_github">
                <i className="fab fa-github"></i>
              </a>
              <a href="#sent_to_liveProject">
                <i className="fab fa-chrome"></i>
              </a>
            </div>
            <p>Tech: HTML, CSS, Javascript</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              distinctio voluptate, aliquam beatae consectetur officiis!
              Repellendus repellat ex commodi officia corrupti nam et,
              laudantium dicta molestias non cupiditate quos illo tempore hic
              ratione laborum.
            </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md="6" className="order-md-2">
            <img src={image3} className="img-fluid rounded" />
          </Col>
          <Col md="6">
            <h3>Projecte Title</h3>
            <div className="link">
              <a href="#sent_to_github">
                <i className="fab fa-github"></i>
              </a>
              <a href="#sent_to_liveProject">
                <i className="fab fa-chrome"></i>
              </a>
            </div>
            <p>Tech: HTML, CSS, Javascript</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              distinctio voluptate, aliquam beatae consectetur officiis!
              Repellendus repellat ex commodi officia corrupti nam et,
              laudantium dicta molestias non cupiditate quos illo tempore hic
              ratione laborum.
            </p>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md="6">
            <img src={image4} className="img-fluid rounded" />
          </Col>
          <Col md="6">
            <h3>Projecte Title</h3>
            <div className="link">
              <a href="#sent_to_github">
                <i className="fab fa-github"></i>
              </a>
              <a href="#sent_to_liveProject">
                <i className="fab fa-chrome"></i>
              </a>
            </div>
            <p>Tech: HTML, CSS, Javascript</p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              distinctio voluptate, aliquam beatae consectetur officiis!
              Repellendus repellat ex commodi officia corrupti nam et,
              laudantium dicta molestias non cupiditate quos illo tempore hic
              ratione laborum.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
