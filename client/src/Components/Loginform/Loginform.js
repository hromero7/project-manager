import { React, useState } from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Loginform() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authInfo = (e) => {
    e.preventDefault();
    axios
      .post(`/api/user/login/`, { username: username, password: password })
      .then((res) => {
        if (res.status === 200) {
          console.log("res: ", res);
        }
      })
      .catch((err) => {
        if (err.resposne.status === 401) {
          console.log("invalid username or password");
        }
      });
  };

  return (
    <Container>
      <Row>
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
            <Form.Text className="newUser">
              <Link to={`/registration`}>Register new account </Link>
            </Form.Text>
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
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
}
