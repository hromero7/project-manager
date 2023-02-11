import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../Components/Assets/3rd logo/Logo";
import NewUser from "../../Components/Loginform/NewUser/NewUser";
import "./Landing.css";

const LandingPage = () => {
  return (
    <Container className="landingContainer landing" fluid>
      <Container className="leftContainer landing" fluid>
        <Row className="descriptionRow landing">
          <Col className="description landing">
            <Col>
              <Logo />
            </Col>
            <h2 className="pd">
              The most comprehensive project management software
            </h2>
            <p>
              The preferred project management application of more than a
              million businesses.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="rightContainer landing" fluid>
        <Row className="landingUserRow landing" fluid>
          <Col className="landingUserCol">
            <NewUser />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LandingPage;
