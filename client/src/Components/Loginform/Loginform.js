import { React, useState, useEffect } from "react";
import { Container, Col, Row, Button, Form, Alert } from "react-bootstrap";
import { redirect, useNavigate, useLocation } from "react-router";
import UserAPI from "../../Utils/UserAPI";
import axios from "axios";

export default function Loginform() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.authenticated === true) {
      navigate("/dashboard");
    }
  }, [localStorage.authenticated]);

  const authInfo = async (e) => {
    const loginRes = await UserAPI.login(user);
    if (!loginRes.isAuthenticated) setErrorMessage(loginRes.message);
    if (loginRes.isAuthenticated) {
      return redirect("/dashboard");
    }
  };

  const handleFormChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Row>
        <Row>
          <Col>
            <Form onSubmit={authInfo} action="/api/user/login" method="post">
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
                      if (location.state?.from) {
                        navigate(location.state.from);
                      }
                    }}
                  >
                    Submit
                  </Button>
                  {errorMessage ? (
                    <Alert variant={"danger"}>{errorMessage}</Alert>
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
