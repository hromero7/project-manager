import { React, useState } from "react";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserAPI from "../../../Utils/UserAPI";
import "./NewUser.css";

export default function NewUser() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const submitBtn = async (e) => {
    e.preventDefault();
    const registerRes = await UserAPI.register(user);
    if (registerRes.data.message.msgError) {
      setErrorMessage(registerRes.data.message.msgBody);
    } else console.log(registerRes.data);
  };

  const handleFormChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Col></Col>
      <Col>
        <p>Get Started in less than 30 seconds</p>
        <Form>
          {/* Firstname */}
          <Form.Group className="mb-3" controlId="formBasicFirst">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="name"
              name="firstName"
              value={user.firstName}
              onChange={handleFormChange}
              placeholder="First Name"
            />
          </Form.Group>
          {/* Lastname */}
          <Form.Group className="mb-3" controlId="formBasicLast">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="name"
              name="lastName"
              value={user.lastName}
              onChange={handleFormChange}
              placeholder="Last Name"
            />
          </Form.Group>
          {/* Email */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={handleFormChange}
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
              name="username"
              value={user.username}
              onChange={handleFormChange}
              placeholder="Username"
              autoComplete="username"
            />
          </Form.Group>
          {/* Password */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={user.password}
              onChange={handleFormChange}
              placeholder="Password"
              autoComplete="current-password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            {/* <Form.Check type="checkbox" label="Check me out" /> */}
          </Form.Group>
          {errorMessage ? <Alert variant={"danger"}>{errorMessage}</Alert> : ""}

          <Button
            variant="primary"
            type="button"
            onClick={(e) => {
              submitBtn(e);
            }}
          >
            Submit
          </Button>

          <div className="login-form">
            <p>Already have an account?</p>
            <Link to={`/login`}>Sign In</Link>
          </div>
        </Form>
      </Col>
      <Col></Col>
    </Container>
  );
}
