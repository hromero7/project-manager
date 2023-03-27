import React from "react";
import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import ProfileUpdate from "../../Components/ProfileUpdate/ProfileUpdate";

export default function Settings() {
  return (
    <Container>
      <Tab.Container defaultActiveKey="profileUpdate">
        <Row>
          <Col>
            <Nav varient="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="profileUpdate">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="profileUpdate">
                <ProfileUpdate />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                "This is where another tab should go"
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
