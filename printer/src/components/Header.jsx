import React from "react";
import printerx from "../assets/img/printerxLogo.jpg";
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavDropdown, Container } from "react-bootstrap"

export default function Header() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
      <img src={printerx} alt="logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/consulta'}>Consulta</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sublimacion</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">otra Impresora</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Impresora 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={'/Nosotros'}>Sobre Nosotros</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
