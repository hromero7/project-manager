import { React, useState } from "react";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import axios from "axios";

export default function NewUser() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submitBtn = (e) => {
    e.preventDefault();
    axios
      .post(`/api/user/register`, {
        firstName: firstname,
        lastName: lastname,
        email: email,
        username: username,
        password: password,
      })
      .then((res) => {
        console.log("res", res);
        if (res.status === 200) {
          console.log("lets gooooooooo");
        }
      })
      .catch((err) => {
        if (err.response.data.message.statusNum === 500) {
          setError(true);
        }
      });
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <Form>
            {/* Firstname */}
            <Form.Group className="mb-3" controlId="formBasicFirst">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="name"
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
                placeholder="First name"
              />
            </Form.Group>
            {/* Lastname */}
            <Form.Group className="mb-3" controlId="formBasicLast">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="name"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                placeholder="Last name"
              />
            </Form.Group>
            {/* Email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter email"
                autoComplete="email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            {/* Username */}
            <Form.Group className="mb-3" controlId="formBasicUser">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="name"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Username"
                autoComplete="username"
              />
            </Form.Group>
            {/* Password */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                autoComplete="current-password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {/* <Form.Check type="checkbox" label="Check me out" /> */}
            </Form.Group>
            {error ? (
              <Alert variant={"danger"}>Username or email already exists</Alert>
            ) : (
              ""
            )}

            <Button
              variant="primary"
              type="button"
              onClick={(e) => {
                submitBtn(e);
              }}
            >
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
