import React from "react";
import { Container } from "react-bootstrap";
import NewUser from "../../Components/Loginform/NewUser/NewUser";
import "./Landing.css";

const LandingPage = () => {
  return (
    <Container className="landing-container">
      <div className="description">
        <h1>Project Manager</h1>
        <h2>The most comprehensive project management software</h2>
        <p>
          The preferred project management application of more than a million
          businesses.
        </p>
      </div>
      <div>
        <NewUser />
      </div>
    </Container>
  );
};

export default LandingPage;
