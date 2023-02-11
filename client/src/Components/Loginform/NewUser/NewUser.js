import { React, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
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
  const [acctCreateStatus, setAcctCreateStatus] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (acctCreateStatus === true) {
      nav("/login");
    }
  });

  const submitBtn = async (e) => {
    e.preventDefault();
    const registerRes = await UserAPI.register(user);
    // console.log("registerRes: ", registerRes);
    if (registerRes.data.message.msgError) {
      setErrorMessage(registerRes.data.message.msgBody);
    } else if (registerRes.data.message.statusNum === 200) {
      setAcctCreateStatus(true);
    }
  };

  const handleFormChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Container className="newUserCont">
      <Row>
        <Col>
          <p id="newUserTagLine">Get Started in less than 30 seconds</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicFirst">
              <Form.Control
                type="name"
                name="firstName"
                value={user.firstName}
                onChange={handleFormChange}
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLast">
              <Form.Control
                type="name"
                name="lastName"
                value={user.lastName}
                onChange={handleFormChange}
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                onChange={handleFormChange}
                placeholder="Enter email"
                autoComplete="email"
              />
              <Form.Text>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUser">
              <Form.Control
                type="name"
                name="username"
                value={user.username}
                onChange={handleFormChange}
                placeholder="Username"
                autoComplete="username"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                value={user.password}
                onChange={handleFormChange}
                placeholder="Password"
                autoComplete="current-password"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            {errorMessage ? (
              <Alert variant={"danger"}>{errorMessage}</Alert>
            ) : (
              ""
            )}

            <Button
              className="signup-btn"
              variant="primary"
              type="button"
              onClick={(e) => {
                submitBtn(e);
              }}
            >
              Create Account
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
