import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate()
  return (
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand onClick={()=>{navigate("/")}} >Equibbler</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link >Create post</Nav.Link>
          <Nav.Link >Search</Nav.Link>
          <Nav.Link >filter</Nav.Link>
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item >Properties</NavDropdown.Item>
            <NavDropdown.Item >Automobiles</NavDropdown.Item>
            <NavDropdown.Item >Bikes</NavDropdown.Item>
            <NavDropdown.Item >Mobile</NavDropdown.Item>
            <NavDropdown.Item >Services</NavDropdown.Item>
            <NavDropdown.Item >Business</NavDropdown.Item>

          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link onClick={()=>{navigate("/login")}} > Log In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header