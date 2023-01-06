import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import "./ProjectList.css";
import ProjectAPI from "../../Utils/ProjectAPI";
import axios from "axios";

export default function Projectlist() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [dbItems, setDbItems] = useState();
  const [getData, setGetData] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");

  useEffect(() => {
    console.log("auth: ", auth);
    getProjects();
  }, []);

  const getProjects = async () => {
    const projectData = await ProjectAPI.getProjects(auth.user._id);
    setDbItems(projectData);
    setGetData(true);
  };

  const addProject = async () => {
    const newProject = await ProjectAPI.createProject(projectTitle);
    if (!newProject.message.msgError) {
      getProjects();
    } else {
      console.log(newProject);
    }
  };

  const deleteProject = async (projectId, userId) => {
    const response = await ProjectAPI.deleteProject(projectId, userId);
    if (!response.message.msgError) {
      getProjects();
    } else {
      console.log(response);
    }
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &nbsp;
      <i class="fa-sharp fa-solid fa-plus"></i>
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, className, "aria-labelledby": labeledBy }, ref) => {
      return (
        <div ref={ref} className={className} aria-labelledby={labeledBy}>
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="New project title:"
            onChange={(e) => setProjectTitle(e.target.value)}
            value={projectTitle}
            autocomplete="off"
          />
          <ul className="list-unstyled">{React.Children.toArray(children)}</ul>
        </div>
      );
    }
  );

  const OptionToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      style={{ cursor: "pointer" }}
    >
      {children}
      <i class="fa-sharp fa-solid fa-fire "></i>
    </a>
  ));

  const OptionMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col
              onClick={() => {
                getProjects();
              }}
            >
              <div>Hello {auth.user.username}!</div>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                >
                  Add Project
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1">
                    <Button
                      onClick={(e) => {
                        addProject();
                      }}
                    >
                      Submit
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            {getData ? (
              dbItems.map((item) => (
                <Col key={item._id}>
                  <Card
                    style={{
                      width: "18rem",
                      height: "200px",
                      margin: "15px",
                      color: "black",
                    }}
                    key={item._id}
                  >
                    <Card.Body
                      onClick={() => {
                        navigate(`/project/${item._id}`);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item._id.slice(-5)}</Card.Text>
                    </Card.Body>

                    <Card.Footer>
                      <Dropdown align="end" className="dropdown">
                        <Dropdown.Toggle
                          as={OptionToggle}
                          id="dropdown-custom-components"
                        ></Dropdown.Toggle>
                        <Dropdown.Menu as={OptionMenu}>
                          <Dropdown.Item
                            eventKey="1"
                            onClick={(e) => {
                              deleteProject(item._id, auth.user._id);
                            }}
                          >
                            Delete Project
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Card.Footer>
                  </Card>
                </Col>
              ))
            ) : (
              <div>Loading</div>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
