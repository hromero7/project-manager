import { React } from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import axios from "axios";

export default function Loginform() {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="name" placeholder="Enter username" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Col>
                <Col>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
