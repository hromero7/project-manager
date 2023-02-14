import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./LogoSm.css";

export default function LogoSm() {
  return (
    <Container className="logoSmCont logo">
      <Row className="logoSmRow logo">
        <Col className="logoSmTextContainer logo">
          <span className="logoSmTexta">
            <span className="logoSmTextb logo">
              <p id="logoSm3">3</p>
            </span>
          </span>
        </Col>
      </Row>
    </Container>
  );
}
