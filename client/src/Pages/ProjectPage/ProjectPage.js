import axios from "axios";
import { React, useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

export default function ProjectPage() {
  let pathname = window.location.pathname.slice(9);
  const [projectData, setProjectData] = useState({
    date: "",
    members: [],
    tasks: [],
    title: "",
    userId: "",
  });
  useEffect((e) => {
    axios
      .get(`/api/project/p/${pathname}`)
      .then((res) => {
        console.log("res: ", res);
        setProjectData({
          date: res.data.date,
          members: res.data.members,
          tasks: res.data.tasks,
          title: res.data.title,
          userId: res.data.userId,
        });
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col
          onClick={() => {
            console.log("projectData: ", projectData);
          }}
        >
          <h1>
            <p>Title: {projectData.title}</p>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tab.Container id="left-tabs" defaultActiveKey="1">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="1"
                      onClick={() => {
                        console.log("projectData: ", projectData);
                      }}
                    >
                      tab 1
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="2">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="3">Tab 3</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="4">Tab 4</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="5">Tab 5</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="1">
                    <div>bleep bloop</div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="2">
                    <div> number 2</div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="3">
                    <div> number 3</div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="4">
                    <div> number 4</div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="5">
                    <div> number 5</div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}
