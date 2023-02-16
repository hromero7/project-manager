import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../../Components/Assets/3rd logo/Logo";
import RisingBubbles from "../../Components/Assets/RisingBubbles/RisingBubbles";
import NewUser from "../../Components/Loginform/NewUser/NewUser";
import "./Landing.css";

const LandingPage = () => {
  return (
    <Container className="landingContainer landing" fluid>
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

      <Container className="ContentContainer landing" fluid>
        <Container className="productDescriptionCont landing">
          <Row className="productDescription">
            {/* <Col className="productDescriptionIcon">
              <span className="pdIconCont">
                <span className="pdIconInner">
                  <i className=" fa-solid fa-bell pdIcon"></i>
                </span>
              </span>
            </Col> */}
            <Col className="productDescriptionText">
              <h4>Stay informed, no matter where you are</h4>
              <p>
                3rd's innovative notifications system ensures you never miss a
                critical update or task. Whether you're at your desk, on the go,
                or simply away from your device, 3rd's notifications will keep
                you informed and on track. With 3rd, you'll have the information
                you need, right when you need it, so you can focus on what
                matters most.
              </p>
            </Col>
          </Row>
          <Container className="landingImageCont" fluid>
            <Row className="landingImageRow">
              <Col className="landingImageCol">
                <Image
                  className="LandingImage3"
                  src="https://images.unsplash.com/photo-1521737451536-00a86f630f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI0fHx0ZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
              </Col>
            </Row>
          </Container>
        </Container>

        <Container className="productDescriptionCont">
          <Row className="productDescription">
            {/* <Col className="productDescriptionIcon">
              <span className="pdIconCont">
                <span className="pdIconInner">
                  <i className=" fa-solid fa-users pdIcon"></i>
                </span>
              </span>
            </Col> */}
            <Col className="productDescriptionText">
              <p>
                Whether you're working with a small group or a large team, 3rd
                has the tools you need to streamline communication, assign
                tasks, and get things done. Say goodbye to endless emails and
                confusion, and hello to a more efficient, organized, and
                productive way of working. With 3rd, your team will achieve
                more, together.
              </p>
            </Col>
          </Row>
          <Container className="landingImageCont" fluid>
            <Row className="landingImageRow">
              <Col className="landingImageCol">
                <Image
                  className="LandingImage3"
                  src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU5fHx0ZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
              </Col>
            </Row>
          </Container>
        </Container>

        <Container className="productDescriptionCont">
          <Row className="productDescription">
            {/* <Col className="productDescriptionIcon">
              <span className="pdIconCont">
                <span className="pdIconInner">
                  <i className="fa-solid fa-comment pdIcon"></i>
                </span>
              </span>
            </Col> */}
            <Col className="productDescriptionText">
              <p>
                Get the right information, at the right time, with 3rd's
                multi-device notifications. Our innovative system keeps you
                informed and connected, no matter where you are. Choose which
                notifications to receive via email, desktop, or mobile, and
                never miss a critical update or task again. With 3rd, you'll
                have the flexibility to stay informed and connected, on your own
                terms. So you can focus on what's important and achieve more,
                every day.
              </p>
            </Col>
          </Row>
          <Container className="landingImageCont" fluid>
            <Row className="landingImageRow">
              <Col className="landingImageCol">
                <Image
                  className="LandingImage3"
                  src="https://images.unsplash.com/photo-1623303647440-967d26b95b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzAwfHx0ZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default LandingPage;
