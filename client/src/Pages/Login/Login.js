import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loginform from "../../Components/Loginform/Loginform";
import "./Login.css";

const LoginPage = () => {
  return (
    <Container className="loginPgCont">
      <Row className="itemContainer">
        <Row className="blobCont">
          <Container className="blobLayer">
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
          </Container>
          <Loginform />
        </Row>
      </Row>
    </Container>
  );
};

export default LoginPage;
