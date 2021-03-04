import React from 'react';
import logo from '../../img/logo.png';
import { Form, FormControl, Nav, Navbar, Button, Container } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img className="img-fluid" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">News</Nav.Link>
            <Nav.Link href="#link">Sport</Nav.Link>
            <Nav.Link href="#link">Reel</Nav.Link>
            <Nav.Link href="#link">Travel</Nav.Link>
            <Nav.Link href="#link">Future</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
