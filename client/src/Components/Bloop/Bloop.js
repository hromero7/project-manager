import { React, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import axios from "axios";

export default function Bloop() {
  const sendData = () => {
    axios.post(`/api/alert/post`, {
      test: "this is a test to see if mongo is connected",
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          Bloop
          <Button
            onClick={() => {
              sendData();
            }}
          >
            send to DB
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
