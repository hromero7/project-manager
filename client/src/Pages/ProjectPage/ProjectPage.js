import { React, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectAPI from "../../Utils/ProjectAPI";
import { AuthContext } from "../../Context/AuthContext";

export default function ProjectPage() {
  const { user } = useContext(AuthContext);
  const { ID } = useParams();
  const [projectData, setProjectData] = useState({
    date: "",
    members: [],
    tasks: [],
    title: "",
    userId: "",
  });
  useEffect(() => {
    ProjectAPI.getOneProject(ID).then(response => {
      setProjectData({
        date: response.date,
        members: response.members,
        tasks: response.tasks,
        title: response.title,
        userId: response.userId,
      });
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
