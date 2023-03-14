import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ProfileUpdate() {
  const [formUpdate, setFormUpdate] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
  });
  // need to be able to edit , firstname lastname, username, email, password.

  const handleFormChange = (e) => {
    setFormUpdate({ ...formUpdate, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicfName">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="First name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasiclName">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Last name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProfileUpdate;
