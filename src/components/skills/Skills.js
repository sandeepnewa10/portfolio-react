import React from "react";
import { Container, Row } from "react-bootstrap";
import { Title } from "../title/Title";
import "./skills.css";

export const Skills = () => {
  return (
    <section id="skills" className="my-5 bg-gray mx-2 py-5">
      <Container>
        <Row>
          <Title title="Skills" />
        </Row>
        <Row className gy-3>         
            <div className="col-lg-3 col-md-3">
              <article className="card content-body mb-4">
                <figure className="text-center mx-lg-4 pt-3">
                  <span className="rounded-circle text-primary icon-lg bg-primary-light display-2">
                    <i className="fa-brands fa-react"></i>
                  </span>
                  <figcaption className="pt-3">
                    <h5 className="title">React</h5>                   
                  </figcaption>
                </figure>
              </article>
            </div>   
            <div className="col-lg-3 col-md-3">
              <article className="card content-body mb-4">
                <figure className="text-center mx-lg-4 pt-3">
                  <span className="rounded-circle text-primary icon-lg bg-primary-light display-2">
                  <i class="fa-brands fa-html5"></i>
                  </span>
                  <figcaption className="pt-3">
                    <h5 className="title">HTML5</h5>                   
                  </figcaption>
                </figure>
              </article>
            </div>
            <div className="col-lg-3 col-md-3">
              <article className="card content-body mb-4">
                <figure className="text-center mx-lg-4 pt-3">
                  <span className="rounded-circle text-primary icon-lg bg-primary-light display-2">
                  <i class="fa-brands fa-css3-alt"></i>


                  </span>
                  <figcaption className="pt-3">
                    <h5 className="title">CSS3</h5>                   
                  </figcaption>
                </figure>
              </article>
            </div>
            <div className="col-lg-3 col-md-3">
              <article className="card content-body mb-4">
                <figure className="text-center mx-lg-4 pt-3">
                  <span className="rounded-circle text-primary icon-lg bg-primary-light display-2">
                  <i class="fa-brands fa-js"></i>
                  </span>
                  <figcaption className="pt-3">
                    <h5 className="title">JS</h5>                   
                  </figcaption>
                </figure>
              </article>
            </div>
            <div className="col-lg-3 col-md-3">
              <article className="card content-body mb-4">
                <figure className="text-center mx-lg-4 pt-3">
                  <span className="rounded-circle text-primary icon-lg bg-primary-light display-2">
                  <i class="fa-brands fa-css3-alt"></i>


                  </span>
                  <figcaption className="pt-3">
                    <h5 className="title">Tailwind CSS</h5>                   
                  </figcaption>
                </figure>
              </article>
            </div>  
            <div className="col-lg-3 col-md-3">
              <article className="card content-body mb-4">
                <figure className="text-center mx-lg-4 pt-3">
                  <span className="rounded-circle text-primary icon-lg bg-primary-light display-2">
                  <i class="fa-brands fa-bootstrap"></i>
                  </span>
                  <figcaption className="pt-3">
                    <h5 className="title">Bootstrap</h5>                   
                  </figcaption>
                </figure>
              </article>
            </div>  
            <div className="col-lg-3 col-md-3">
              <article className="card content-body mb-4">
                <figure className="text-center mx-lg-4 pt-3">
                  <span className="rounded-circle text-primary icon-lg bg-primary-light display-2">
                  <i class="fa-brands fa-figma"></i>
                  </span>
                  <figcaption className="pt-3">
                    <h5 className="title">Figma</h5>                   
                  </figcaption>
                </figure>
              </article>
            </div>  
            <div className="col-lg-3 col-md-3">
              <article className="card content-body mb-4">
                <figure className="text-center mx-lg-4 pt-3">
                  <span className="rounded-circle text-primary icon-lg bg-primary-light display-2">
                  <i class="fa-brands fa-git "></i>
                  </span>
                  <figcaption className="pt-3">
                    <h5 className="title">Git</h5>                   
                  </figcaption>
                </figure>
              </article>
            </div>  
            <div className="col-lg-3 col-md-3">
              <article className="card content-body mb-4">
                <figure className="text-center mx-lg-4 pt-3">
                  <span className="rounded-circle text-primary icon-lg bg-primary-light display-2">
                  <i class="fa-brands fa-sass"></i>
                  </span>
                  <figcaption className="pt-3">
                    <h5 className="title">SCSS</h5>                   
                  </figcaption>
                </figure>
              </article>
            </div>  
        </Row>
      </Container>
    </section>
  );
};
