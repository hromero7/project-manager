import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBar = () => {
    return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Project Manager</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar;