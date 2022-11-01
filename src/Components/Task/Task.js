import { React, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Task.css";

export default function Task() {
  return (
    <Container className="taskCont">
      <Row className="taskRow">
        <Col className="taskCol">
          Task Component
          {/* This component should maybe include a calendar?  */}
        </Col>
      </Row>
    </Container>
  );
}
