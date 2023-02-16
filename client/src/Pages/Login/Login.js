import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loginform from "../../Components/Loginform/Loginform";
import "./Login.css";

const LoginPage = () => {
  return (
    <Container>
      <Row>
        <Col />
        <Col className="itemContainer">
          <Col className="blobLayer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Col>
          <Col className="login-container">
            <p>Log in to your account</p>
            <Loginform />
          </Col>
        </Col>
        <Col />
      </Row>
    </Container>
  );
};

export default LoginPage;
