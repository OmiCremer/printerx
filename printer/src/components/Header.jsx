import React, {useContext} from "react";
import printerx from "../assets/img/printerxLogo.jpg";
import {Link} from 'react-router-dom'
import {Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import {Context} from '../context/ContextGeneral'

export default function Header() {

  const {setUno} = useContext(Context)
  

  const sublimacion = ()=>{
    setUno('sublimacion')
  }
  const equiposUV = ()=>{
    setUno('equiposUV')
  }
  const calandras = ()=>{
    setUno('calandras')
  }

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
              <NavDropdown.Item onClick={sublimacion}>Sublimacion</NavDropdown.Item>
              <NavDropdown.Item onClick={equiposUV}>Equipos UV</NavDropdown.Item>
              <NavDropdown.Item onClick={calandras}>Calandras</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tintas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Suiza</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Koera</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">China</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={'/Nosotros'}>Sobre Nosotros</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
