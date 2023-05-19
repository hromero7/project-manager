import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loginform from "../../Components/Loginform/Loginform";
import "./Login.css";

const LoginPage = () => {
  return (
    <Container className="loginPgCont">
      <Row>
        <Row>
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
          </Col>
        </Row>
      </Row>
      <Row>
        <Loginform />
      </Row>
    </Container>
  );
};

export default LoginPage;
