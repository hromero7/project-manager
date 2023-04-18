import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../../Components/Assets/3rd logo/Logo";
import RisingBubbles from "../../../Components/Assets/RisingBubbles/RisingBubbles";
import NewUser from "../../../Components/Loginform/NewUser/NewUser";
import "./HeroPanel.css";

export default function HeroPanel() {
  return (
    <Container className="row1Container landing" fluid>
      <Container className="wordContainer landing" fluid>
        <Row className="landing">
          <Col className="description landing">
            <Col>
              <Logo />
            </Col>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col className="landingTagline">
            <h2 className="pd">
              <p>Unleash your team's potential with us!</p>
            </h2>
          </Col>
        </Row>
      </Container>
      <Container className="landingNewUser landing" fluid>
        <Row className="landingUserRow landing">
          <Col className="landingUserCol">
            <Row>
              <Col>
                <h3 className="landingPrefixText">
                  <p>Get things done, together with 3rd</p>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <NewUser />
              </Col>
            </Row>
            <Row>
              <Col>
                <h3 className="landingPrefixText">
                  <p>Empower your team and streamline your projects.</p>
                </h3>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <RisingBubbles />
    </Container>
  );
}
