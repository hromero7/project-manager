import React, { useState, useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";
import LogoSm from "../Assets/3rd logo small/LogoSm";
import "./DashNav.css";
import UserAPI from "../../Utils/UserAPI";

const DashNav = () => {
  const navigate = useNavigate();
  const [textClass, setTextClass] = useState({ isHovered: false });
  const toggleClass = (boolean) => {
    setTextClass({ isHovered: boolean });
  };
  const { setIsAuthenticated, setUser, user } = useContext(AuthContext);

  const handleLogout = async () => {
    const data = await UserAPI.logout();
    if (data.success) {
      setUser(data.user);
      setIsAuthenticated(false);
    }
  };

  return (
    <div>
      <div
        className="side-nav"
        onMouseEnter={() => toggleClass(true)}
        onMouseLeave={() => toggleClass(false)}
      >
        <Navbar.Brand
          // href="/dashboard"
          className="side-nav-logo"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <LogoSm />
        </Navbar.Brand>
        <div className="side-nav-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
          <p
            className={
              textClass.isHovered ? "side-nav-text text-hover" : "side-nav-text"
            }
          >
            Search Projects
          </p>
        </div>
        <div className="side-nav-icon">
          <i className="fa-solid fa-plus"></i>
          <p
            className={
              textClass.isHovered ? "side-nav-text text-hover" : "side-nav-text"
            }
          >
            Create Project
          </p>
        </div>
        <div className="bottom-icon side-nav-icon">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <p
            className={
              textClass.isHovered ? "side-nav-text text-hover" : "side-nav-text"
            }
            onClick={(e) => {
              handleLogout(e);
            }}
          >
            Logout
          </p>
        </div>
      </div>

      <div className="dash-nav-container">
        <Navbar expand="sm" variant="dark" className="navbar">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto flex-column">
                <Navbar.Brand className="dash-user-info">
                  <p className="dash-logo">
                    {user.firstName[0]}
                    {user.lastName[0]}
                  </p>
                  <div className="dash-user">
                    <p className="dash-name">
                      {user.firstName} {user.lastName}
                    </p>
                  </div>
                </Navbar.Brand>
                <Nav.Link
                  // href="/dashboard"
                  className="nav-link"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                >
                  <i className="fa-solid fa-table"></i>
                  <p>Projects</p>
                </Nav.Link>
                <Nav.Link
                  // href="/dashboard"
                  className="nav-link"
                  onClick={() => {
                    navigate("/questions");
                  }}
                >
                  <i class="fa-solid fa-truck-fast"></i>
                  <p>AI Form</p>
                </Nav.Link>

                <Nav.Link
                  // href="/editprofile"
                  className="nav-link nav-link-settings"
                  onClick={() => {
                    navigate("/editprofile");
                  }}
                >
                  <i className="fa-solid fa-gear"></i>
                  <p>Account Settings</p>
                </Nav.Link>
                <div className="nav-break"></div>
                <Nav.Link className="nav-link feature-status">
                  <i className="fa-solid fa-truck"></i>
                  <p>Releases</p>
                </Nav.Link>
                <Nav.Link className="nav-link feature-status">
                  <i className="fa-regular fa-file-lines"></i>
                  <p>Pages</p>
                </Nav.Link>
                <Nav.Link className="nav-link feature-status">
                  <i className="fa-solid fa-arrow-trend-up"></i>
                  <p>Reports</p>
                </Nav.Link>
                <Nav.Link className="nav-link feature-status">
                  <i className="fa-regular fa-circle-check"></i>
                  <p>Pro Version</p>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default DashNav;
