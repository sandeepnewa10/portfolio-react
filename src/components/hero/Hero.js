import React from "react";
import { Container, Row } from "react-bootstrap";
import { Header } from "../layouts/Header";
import image1 from "../../assets/image1.png";

export const Hero = () => {
  return (
    <>
      <Header />
      <section classclassName="bg-white shadow my-4">
        <Container>
          <Row className="row align-items-center">
            <div className="col-lg-7 col-xl-7 col-xxl-6">
              <article className="my-5">
                <h1 className="display-4">
                 Hello I'm<br />
                  Sandeep Prajapati
                </h1>
                <p className="lead">
                  FullStack Developer
                </p>
                <a href="#" className="btn btn-primary btn-lg">
                  {" "}
                  Discover{" "}
                </a>
                <a href="#" className="btn btn-light btn-lg">
                  {" "}
                  Learn more{" "}
                </a>
              </article>
            </div>
            <div className="col-lg-5 col-xl-5 col-xxl-6">
              <figure className="mx-4 my-5">
                <img src={image1} className="img-fluid" />
              </figure>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};
