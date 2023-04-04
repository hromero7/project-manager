import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import ProjectAPI from "../../Utils/ProjectAPI";
import DatePicker from "react-date-picker";
import "./ProjectList.css";

export default function Projectlist() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [dbItems, setDbItems] = useState();
  const [getData, setGetData] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");

  useEffect(() => {
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
    <Dropdown
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &nbsp;
      <i className="fa-sharp fa-solid fa-plus"></i>
    </Dropdown>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, className, "aria-labelledby": labeledBy }, ref) => {
      return (
        <div ref={ref} className={className} aria-labelledby={labeledBy}>
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="New project title:"
            onChange={(e) => {
              setProjectTitle(e.target.value);
            }}
            value={projectTitle}
            autocomplete="off"
          />
          <ul className="list-unstyled">{React.Children.toArray(children)}</ul>
        </div>
      );
    }
  );

  const OptionToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Dropdown
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      style={{ cursor: "pointer" }}
    >
      {children}
      <i className="fa-sharp fa-solid fa-fire "></i>
    </Dropdown>
  ));

  const OptionMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="list-unstyled">{children}</ul>
        </div>
      );
    }
  );

  return (
    <Container className="projectListCont">
      <Row>
        <Col>
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              Add Project
            </Dropdown.Toggle>
            <Dropdown.Menu as={CustomMenu}>
              <Dropdown.Item eventKey="1">
                <Button
                  onClick={() => {
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
      <Container className="cardParent">
        <Row className="cardItems">
          <Col className="cardContainer">
            <ul className="cardContainera">
              {getData ? (
                dbItems.map((item, index) => {
                  const dueDateSort = item.tasks.sort(
                    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
                  );
                  return (
                    <li className="cardContainerb">
                      <Col className="cardRow">
                        <Col className="cardContent">
                          <Card
                            style={{
                              width: "18rem",
                              height: "200px",
                              margin: "15px",
                              color: "black",
                            }}
                            key={item._id}
                          >
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Body
                              onClick={() => {
                                navigate(`/project/${item._id}`);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              {dueDateSort >= 0 ? (
                                ""
                              ) : (
                                <div className="cardData">
                                  <Card.Text>
                                    Due soon: {dueDateSort[0].taskTitle} &#64;
                                  </Card.Text>
                                  {/* <Card.Text> */}
                                  <DatePicker
                                    placeholder={dueDateSort[0].dueDate}
                                    value={dueDateSort[0].dueDate}
                                    disabled={true}
                                    clearIcon={null}
                                    disableCalendar={true}
                                    calendarIcon={null}
                                  />
                                  {/* </Card.Text> */}
                                </div>
                              )}
                            </Card.Body>

                            <Card.Footer>
                              <Dropdown align="start">
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
                      </Col>
                    </li>
                  );
                })
              ) : (
                <div>Loading</div>
              )}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
