import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand >Equibbler</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link >About</Nav.Link>
          <Nav.Link >Pricing</Nav.Link>
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
          <Nav.Link >Log In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header