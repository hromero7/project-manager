import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../Components/Assets/3rd logo/Logo";
import RisingBubbles from "../../Components/Assets/RisingBubbles/RisingBubbles";
import NewUser from "../../Components/Loginform/NewUser/NewUser";

import "./Landing.css";

const LandingPage = () => {
  return (
    <Container className="landingContainer landing" fluid>
      <Container className="row1Container landing">
        <Col>
          <Container className="wordContainer landing" fluid>
            <Row className="descriptionRow landing">
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
        </Col>
        <Col>
          <Container className="landingNewUser" fluid>
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
                      <p>Empower your team, streamline your projects.</p>
                    </h3>
                  </Col>
                </Row>
              </Col>
            </Row>
            <RisingBubbles />
          </Container>
        </Col>
      </Container>

      <Container className="ContentContainer" fluid>
        <Row>
          <Row>
            <Col className="middleContent">
              <Col className="productDescription">
                <Col className="productDescriptionIcon">
                  <span className="pdIconCont">
                    <span className="pdIconInner">
                      <i className=" fa-solid fa-bell pdIcon"></i>
                    </span>
                  </span>
                </Col>
                <Col className="productDescriptionText">
                  <p>
                    Stay informed, no matter where you are, with 3rd's
                    notifications. Our innovative notifications system ensures
                    you never miss a critical update or task. Whether you're at
                    your desk, on the go, or simply away from your device, 3rd's
                    notifications will keep you informed and on track. Receive
                    notifications via email, desktop, or mobile, and choose the
                    notifications that matter most to you. With 3rd, you'll have
                    the information you need, right when you need it, so you can
                    focus on what matters most.
                  </p>
                </Col>
              </Col>
              <Col className="productDescription">
                <Col className="productDescriptionIcon">
                  <span className="pdIconCont">
                    <span className="pdIconInner">
                      <i className=" fa-solid fa-users pdIcon"></i>
                    </span>
                  </span>
                </Col>
                <Col className="productDescriptionText">
                  <p>
                    Whether you're working with a small group or a large team,
                    3rd has the tools you need to streamline communication,
                    assign tasks, and get things done. Say goodbye to endless
                    emails and confusion, and hello to a more efficient,
                    organized, and productive way of working. With 3rd, your
                    team will achieve more, together.
                  </p>
                </Col>
              </Col>
              <Col className="productDescription">
                <Col className="productDescriptionIcon">
                  <span className="pdIconCont">
                    <span className="pdIconInner">
                      <i className="fa-solid fa-comment pdIcon"></i>
                    </span>
                  </span>
                </Col>
                <Col className="productDescriptionText">
                  <p>
                    Get the right information, at the right time, with 3rd's
                    multi-device notifications. Our innovative system keeps you
                    informed and connected, no matter where you are. Choose
                    which notifications to receive via email, desktop, or
                    mobile, and never miss a critical update or task again. With
                    3rd, you'll have the flexibility to stay informed and
                    connected, on your own terms. So you can focus on what's
                    important and achieve more, every day.
                  </p>
                </Col>
              </Col>
            </Col>
          </Row>
        </Row>
      </Container>
    </Container>
  );
};

export default LandingPage;
