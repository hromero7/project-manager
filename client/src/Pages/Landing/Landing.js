import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NewUser from "../../Components/Loginform/NewUser/NewUser";
import "./Landing.css";

const LandingPage = () => {
  return (
    <Container className="landing-container">
      <Row>
        <Col className="description">
          <h1>Project Manager</h1>
          <h2>The most comprehensive project management software</h2>
          <p>
            The preferred project management application of more than a million
            businesses.
          </p>
        </Col>

        <Col>
          <NewUser />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
