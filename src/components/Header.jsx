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
  const [searchterm,setsearchterm] = React.useState("")
  const handleSearch = (e)=>{
    e.preventDefault()
    if (searchterm.trim === "") return
    navigate(`/search/${searchterm}`)
    
  }
  return (
    <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand onClick={()=>{navigate("/")}} >Equibbler</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {
            loggedIn &&
            <Nav.Link onClick={()=>{navigate("/create-post")}} >Create post</Nav.Link>
          }
          {/* <Nav.Link >filter</Nav.Link> */}
          <NavDropdown title="Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item onClick={()=>{navigate("/category/Property")}} >Property</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>{navigate("/category/Cars")}} >Cars</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>{navigate("/category/Bikes")}} >Bikes</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>{navigate("/category/Electronics")}} >Electronics</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>{navigate("/category/Services")}} >Services</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>{navigate("/category/Business")}} >Business</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>{navigate("/category/Jobs")}} >Jobs</NavDropdown.Item>
            <NavDropdown.Item onClick={()=>{navigate("/category/Miscellaneous")}} >Miscellaneous</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
        <Form onSubmit={handleSearch} className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchterm}
                    onChange={(e)=>setsearchterm(e.target.value)}
                  />
                  <Button type='submit' variant="outline-success">Search</Button>
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