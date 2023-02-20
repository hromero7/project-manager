import React from "react";
import { Container } from "react-bootstrap";
import Row1 from "../Landing/Row1/Row1";
import Row2 from "../Landing/Row2/Row2";
import "./Landing.css";

const LandingPage = () => {
  return (
    <Container className="landingContainer landing" fluid>
      <Row1 />
      <Row2 />
    </Container>
  );
};

export default LandingPage;
