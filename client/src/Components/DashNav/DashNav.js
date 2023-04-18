import React, { useState, useContext } from "react";
import { Navbar, Container, Nav, NavDropdown, Button, NavbarBrand } from "react-bootstrap";
import Logo from "../Assets/3rd logo/Logo";
import { AuthContext } from "../../Context/AuthContext";
import LogoSm from "../Assets/3rd logo small/LogoSm";
import "./DashNav.css";

const DashNav = () => {
    const [textClass, setTextClass] = useState({ isHovered: false });
    const toggleClass = (boolean) => {
        setTextClass({isHovered: boolean})
    }
    const auth = useContext(AuthContext);
    
    return (
        <div>
            <div className="side-nav" onMouseEnter={() => toggleClass(true)} onMouseLeave={() => toggleClass(false)}>
                <Navbar.Brand href="#" className="side-nav-logo">
                    <LogoSm />
                </Navbar.Brand>
                <div className="side-nav-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <p className={textClass.isHovered? "side-nav-text text-hover" : "side-nav-text"}>Search Projects</p>
                </div>
                <div className="side-nav-icon">
                    <i className="fa-solid fa-plus"></i>
                    <p className={textClass.isHovered? "side-nav-text text-hover" : "side-nav-text"}>Create Project</p>
                </div>
                <div className="bottom-icon side-nav-icon">
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    <p className={textClass.isHovered? "side-nav-text text-hover" : "side-nav-text"}>Logout</p>
                </div>
            </div>
        
            <div className="dash-nav-container">
                <Navbar expand="sm" variant="dark" className="navbar">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto flex-column">
                            <Navbar.Brand className="dash-user-info">
                                <p className="dash-logo">{auth.user.firstName[0]}{auth.user.lastName[0]}</p>
                                <div className="dash-user">
                                    <p className="dash-name">{auth.user.firstName} {auth.user.lastName}</p>
                                    <p className="dash-project">Project Dashboard</p>
                                </div>
                            </Navbar.Brand>
                            <Nav.Link href="#features" className="nav-link">
                                <i className="fa-solid fa-table"></i>
                                <p>Projects</p>
                            </Nav.Link>
                            
                            <Nav.Link href="#pricing" className="nav-link nav-link-settings">
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
    )
}

export default DashNav;