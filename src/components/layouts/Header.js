import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="md" className='py-3' collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" width="150" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bolder">
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
