import { React, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";

export default function NewUser() {
  const [firstname, setFirstname] = useState("marc");
  const [lastname, setLastname] = useState("salaver");
  const [email, setEmail] = useState("marcsalaver@gmail.com");
  const [username, setUsername] = useState("marc");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState();

  const submitBtn = (e) => {
    // e.preventDefault();
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
        if (res.status === 500) {
          console.log("big problem!");
        }
        if (res.status === 400) {
          console.log("Username already exists");
        }
      })
      .catch((err) => {
        setError(err);
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
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                submitBtn();
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
