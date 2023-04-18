import React from "react";
import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import ProfileUpdate from "../../Components/ProfileUpdate/ProfileUpdate";
import "./Settings.css";

export default function Settings() {
  return (
    <Container className="settingsCont">
      <Tab.Container className="" defaultActiveKey="profileUpdate">
        <Row>
          <Col className="pstc" sm={3}>
            <Nav varient="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="profileUpdate">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Notifications">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="profileUpdate">
                <ProfileUpdate />
              </Tab.Pane>
              <Tab.Pane eventKey="Notifications">
                "This is where notification updates should go"
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
