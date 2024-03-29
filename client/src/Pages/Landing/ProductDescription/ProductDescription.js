import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./ProductDescription.css";

export default function ProductDescription() {
  return (
    <Container className="productDescriptionContainer" fluid>
      <Container className="ContentContainerProduct">
        <Row className="productDescriptionCont ">
          <Container className="descImageCont" fluid>
            <Container className="productDescription" fluid>
              <Row className="productDescriptionText">
                <Row>
                  <Col className="descHeadline">
                    <h4>Stay informed, no matter where you are</h4>
                  </Col>
                </Row>
                <Row>
                  <Col className="deskBody">
                    <p>
                      3rd's innovative notifications system ensures you never
                      miss a critical update or task. Whether you're at your
                      desk, on the go, or simply away from your device, 3rd's
                      notifications will keep you informed and on track. With
                      3rd, you'll have the information you need, right when you
                      need it, so you can focus on what matters most.
                    </p>
                  </Col>
                </Row>
                <Container className="landingImageCont">
                  <Row className="landingImageRow">
                    <Col className="landingImageCol">
                      <Image
                        className="LandingImage"
                        src="https://images.unsplash.com/photo-1521737451536-00a86f630f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjI0fHx0ZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      />
                    </Col>
                  </Row>
                </Container>
              </Row>
            </Container>
          </Container>
        </Row>
      </Container>
      <Container className="ContentContainerProduct">
        <Row className="productDescriptionCont  ">
          <Container className="descImageCont" fluid>
            <Container className="productDescription" fluid>
              <Row className="productDescriptionText">
                <Row>
                  <Col className="descHeadline">
                    <h4>
                      Whether you're working with a small group or a large team
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col className="deskBody">
                    <p>
                      3rd has the tools you need to streamline communication,
                      assign tasks, and get things done. Say goodbye to endless
                      emails and confusion, and hello to a more efficient,
                      organized, and productive way of working. With 3rd, your
                      team will achieve more, together.
                    </p>
                  </Col>
                </Row>
              </Row>
            </Container>
            <Container className="landingImageCont">
              <Row className="landingImageRow">
                <Col className="landingImageCol">
                  <Image
                    className="LandingImage"
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU5fHx0ZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  />
                </Col>
              </Row>
            </Container>
          </Container>
        </Row>
      </Container>
      <Container className="ContentContainerProduct">
        <Row className="productDescriptionCont  ">
          <Container className="descImageCont" fluid>
            <Container className="productDescription" fluid>
              <Row className="productDescriptionText">
                <Row>
                  <Col className="descHeadline">
                    <h4>Get the right information, at the right time</h4>
                  </Col>
                </Row>
                <Row>
                  <Col className="deskBody">
                    <p>
                      with 3rd's multi-device notifications. Our innovative
                      system keeps you informed and connected, no matter where
                      you are. Choose which notifications to receive via email,
                      desktop, or mobile, and never miss a critical update or
                      task again. With 3rd, you'll have the flexibility to stay
                      informed and connected, on your own terms. So you can
                      focus on what's important and achieve more, every day.
                    </p>
                  </Col>
                </Row>
              </Row>
            </Container>
            <Container className="landingImageCont">
              <Row className="landingImageRow">
                <Col className="landingImageCol">
                  <Image
                    className="LandingImage"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  />
                </Col>
              </Row>
            </Container>
          </Container>
        </Row>
      </Container>
    </Container>
  );
}
