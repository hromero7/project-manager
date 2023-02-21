import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import Logo from "../3rd logo/Logo";

export default function Footer() {
  return (
    <Container className="footerContainer" fluid>
      <Container className="footerContent" fluid>
        <Container className="footerLogoContainer">
          <Row className="footerLogo">
            <Col>
              <Logo />
            </Col>
          </Row>
        </Container>
        <Container className="siteMapContainer" fluid>
          <Container className="siteMapItems">
            <Col id="siteMapText">Site map</Col>
            <Col className="siteMapItem">About</Col>
            <Col className="siteMapItem">Our story</Col>
            <Col className="siteMapItem">Contact</Col>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
