import { React, useState, useEffect, useContext } from "react";
import { Nav, Navbar, Button, Container, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router";
import UserAPI from "../../Utils/UserAPI";
import { AuthContext } from "../../Context/AuthContext";
import "./Navbar.css";

const NavBar = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    const data = await UserAPI.logout();
    if (data.success){
        setUser(data.user);
        setIsAuthenticated(false);
    }
  };

  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Navbar.Brand href="/dashboard">Project Manager</Navbar.Brand>
      <Container fluid>
        <Nav className="me-auto">
          <Nav.Link href="/dashboard">Home</Nav.Link>
          {/* <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <Nav>
          <Nav.Item className="navbar-right">
            {isAuthenticated? (
              <NavDropdown align="end" id="collasible-nav-dropdown">
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => {
                      handleLogout(e);
                    }}
                  >
                    Log Out
                  </Button>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  navigate("/login");
                }}
              >
                Log In
              </Button>
            )}
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
