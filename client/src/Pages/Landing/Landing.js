import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../Components/Assets/3rd logo/Logo";
import NewUser from "../../Components/Loginform/NewUser/NewUser";
import "./Landing.css";

const LandingPage = () => {
  return (
    <Container className="landingContainer landing" fluid>
      <Container className="leftContainer landing" fluid>
        <Row className="descriptionRow landing">
          <Col className="description landing">
            <Col>
              <Logo />
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className="landingTagline">
            <h2 className="pd">
              <p>Unleash your team's potential with us!</p>
            </h2>
            <h3>
              <p>Empower your team, streamline your projects.</p>
            </h3>
          </Col>
        </Row>
      </Container>
      <Container className="ContentContainer">
        <Row>
          <Col className="middleContent">
            <Col>
              <i class=" fa-solid fa-bell"></i>
              {/* <h1>words is hard</h1> */}
            </Col>
            <Col>
              <i class=" fa-solid fa-users"></i>
            </Col>
            <Col>
              <i class="fa-solid fa-comment"></i>
            </Col>
          </Col>
        </Row>
      </Container>
      <Container className="rightContainer landing" fluid>
        <Row className="landingUserRow landing" fluid>
          <Col className="landingUserCol">
            <Row>
              <Col>
                <h3>
                  <p>Get things done, together with 3rd</p>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <NewUser />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default LandingPage;
