import { React, useState, useContext } from "react";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router";
import UserAPI from "../../Utils/UserAPI";
import { AuthContext } from "../../Context/AuthContext";
import "./Navbar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [loggedStatus, setLoggedStatus] = useState(true);

  const handleLogout = (e) => {
    UserAPI.logout().then((res) => {
      if (res.isAuthenticated === false) {
        setLoggedStatus(false);
        localStorage.removeItem("authenticated");
        auth.isAuthenticated = false;
        navigate("/");
      }
    });
  };

  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Navbar.Brand href="/dashboard">Project Manager</Navbar.Brand>
      <Container fluid>
        <Nav className="me-auto">
          <Nav.Link href="/dashboard">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Item className="navbar-right">
            {loggedStatus ? (
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  handleLogout(e);
                }}
              >
                Log Out
              </Button>
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
