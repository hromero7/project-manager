import { React, useState } from "react";
import { Container, Col, Row, Button, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Loginform() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);
  const [error, setError] = useState(false);

  const authInfo = (e) => {
    e.preventDefault();
    axios
      .post(`/api/user/login/`, { username: username, password: password })
      .then((res) => {
        if (res.status === 200) {
          console.log("res: ", res);
          console.log("Ready for redirect!");
        }
        if (res.status === 500) {
          console.log("res: ", res);
          console.log("500 error");
        }
      })
      .catch((err) => {
        setError(true);
        console.log("err", err);
        if (err.resposne.status === 401) {
          console.log("invalid username or password");
        }
        if (err.status === 500) {
          console.log("res: ", err);
          console.log("500 error");
        }
      });
  };

  return (
    <Container>
      <Row>
        <Row>
          <Col xs={3} />
          <Col>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
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
                    {error ? (
                      <Alert variant={"danger"}>
                        Invalid username or password!
                      </Alert>
                    ) : (
                      ""
                    )}
                  </Col>
                </Row>
              </Row>
              <Row>
                <Col>
                  <Form.Text className="newUser">
                    <Link to={`/registration`}>Register new account </Link>
                  </Form.Text>
                </Col>
              </Row>
            </Form>
          </Col>

          <Col xs={3} />
        </Row>
      </Row>
    </Container>
  );
}
