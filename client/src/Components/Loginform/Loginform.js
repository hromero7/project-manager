import { React, useState } from "react";
import { Container, Col, Row, Button, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAPI from "../../Utils/UserAPI";
import axios from "axios";

export default function Loginform() {

  const [user, setUser] = useState({username: "", password: ""});
  const [errorMessage, setErrorMessage] = useState("");

  const authInfo = async (e) => {
    e.preventDefault();
    const loginRes = await UserAPI.login(user);
    if (!loginRes.isAuthenticated) setErrorMessage(loginRes.message);
  };

  const handleFormChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value });
  }

  return (
    <Container>
      <Row>
        <Row>
          <Col>
            <Form>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Enter username"
                      name="username"
                      value={user.username}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={user.password}
                      onChange={handleFormChange}
                    />
                  </Form.Group>
                </Col>
                <Row>
                  <Col>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={(e) => {
                        authInfo(e);
                      }}
                    >
                      Submit
                    </Button>
                    {errorMessage ? (
                      <Alert variant={"danger"}>
                        {errorMessage}
                      </Alert>
                    ) : (
                      ""
                    )}
                  </Col>
                </Row>
            </Form>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
