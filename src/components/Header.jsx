import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Form,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useLogin from '../Hooks/useLogin';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  let navigate = useNavigate()
  const loggedIn = useLogin()
  return (
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand onClick={()=>{navigate("/")}} >Equibbler</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {
            loggedIn &&
            <Nav.Link >Create post</Nav.Link>
          }
          {/* <Nav.Link >filter</Nav.Link> */}
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item onClick={()=>{navigate("/category/properties")}} >Properties</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>{navigate("/category/cars")}} >Cars</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>{navigate("/category/bikes")}} >Bikes</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>{navigate("/category/mobiles")}} >Mobile</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>{navigate("/category/services")}} >Services</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>{navigate("/category/business")}} >Business</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
        <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                {
                  loggedIn ? <Nav.Link><FaUserCircle fontSize={30} color='white' /></Nav.Link> :
                  <Nav.Link onClick={()=>{navigate("/login")}} > Log In</Nav.Link>
                }
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header