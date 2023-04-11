import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./LoadingSpinner.css";

export default function LoadingSpinner() {
  return (
    <Container className="LoaderCont">
      <Row className="LoaderRow">
        <Col className="LoaderCol">
          <span className="loader"></span>
        </Col>
      </Row>
    </Container>
  );
}
