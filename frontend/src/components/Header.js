import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import {FaShoppingCart,FaUser} from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect >
        <Container>
          <Navbar.Brand href="#home">Proshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home" className="d-flex align-items-center"> <FaShoppingCart /> <span className="p-2">Card</span> </Nav.Link>
              <Nav.Link href="#link" className="d-flex align-items-center"> <FaUser/> <span className="p-2">Sign In</span> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
