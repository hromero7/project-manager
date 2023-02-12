import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Logo.css";

export default function Logo() {
  return (
    <Container className="logoCont logo">
      <Row className="logoRow logo">
        <Col className="logoTextContainer logo">
          <span className="logoTexta">
            <span className="logoTextb logo">
              <p id="logo3">3</p>
              <p id="logoRd">rd</p>
            </span>
          </span>
        </Col>
      </Row>
    </Container>
  );
}
