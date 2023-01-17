import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Button,
  Table,
  Form,
  Modal,
  Dropdown,
} from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import "./ProjectPage.css";
import { useParams } from "react-router-dom";
import ProjectAPI from "../../Utils/ProjectAPI";
import { AuthContext } from "../../Context/AuthContext";

export default function ProjectPage() {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [value, setValue] = useState("");
  const [getSearchData, setGetSearchData] = useState(false);
  const [taskValues, setTaskValues] = useState({
    taskTitle: "",
    startTime: startTime,
    endTime: endTime,
    priority: "",
  });
  const { user } = useContext(AuthContext);
  const { ID } = useParams();
  const [projectData, setProjectData] = useState({
    date: "",
    members: [],
    tasks: [],
    title: "",
    userId: "",
    extras: {},
  });
  const [dropdownHelpers, setDropdownHelpers] = useState([]);
  const [show, setShow] = useState(false);
  const [searchList, setSearchList] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect((e) => {
    getProjData();
  }, []);

  const handleClose = () => {
    setShow(false);
    getProjData();
  };
  const handleShow = () => setShow(true);

  const getProjData = () => {
    ProjectAPI.getOneProject(ID).then((response) => {
      setProjectData({
        date: response.date,
        members: response.members,
        tasks: response.tasks,
        title: response.title,
        userId: response.userId,
      });
    });
  };

  const addTask = () => {
    axios
      .post(`/api/task/create/${ID}`, {
        taskTitle: taskValues.taskTitle,
        startDate: taskValues.startTime,
        dueDate: taskValues.endTime,
        priority: taskValues.priority,
      })
      .then((res) => {
        // console.log("res.data: ", res.data);
        if (res.data.message.msgError === false) {
          handleClose();
          setTaskValues({
            taskTitle: "",
            startTime: startTime,
            endTime: endTime,
            priority: "",
          });
        }
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  const handleTaskFormChange = (e) => {
    setTaskValues({ ...taskValues, [e.target.name]: e.target.value });
  };

  const CustomUserAddToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  const taskMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="list-unstyled"></ul>
          {children}
        </div>
      );
    }
  );

  return (
    <Container>
      <Row>
        <Col
          onClick={() => {
            console.log("projectData: ", projectData);
          }}
        >
          <h1>
            <p>{projectData.title}</p>
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
                    <Nav.Link eventKey="1">My Tasks</Nav.Link>
                    <Nav.Link eventKey="2">Collaborative Projects</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="1">
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>id:</th>
                          <th>Title:</th>
                          <th>Date created:</th>
                          <th>Due date:</th>
                          <th>Assigned to:</th>
                          <th>Prority:</th>
                          <th>Status:</th>
                          <th>Author:</th>
                          <th>
                            <Button onClick={handleShow}>Add Task</Button>
                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Task details:</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formTaskTitle"
                                  >
                                    <Form.Label>Task title:</Form.Label>
                                    <Form.Control
                                      name="taskTitle"
                                      placeholder="Enter title"
                                      value={taskValues.taskTitle}
                                      onChange={handleTaskFormChange}
                                      autocomplete="off"
                                      required
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formStartDate"
                                  >
                                    <Form.Label>Start:</Form.Label>
                                    <DateTimePicker
                                      value={startTime}
                                      onChange={setStartTime}
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formEndDate"
                                  >
                                    <Form.Label>End:</Form.Label>
                                    <DateTimePicker
                                      value={endTime}
                                      onChange={setEndTime}
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formEndDate"
                                  >
                                    <Form.Label>Proiority:</Form.Label>
                                    <Form.Control
                                      type="text"
                                      name="priority"
                                      placeholder="Proiority"
                                      value={taskValues.priority}
                                      onChange={handleTaskFormChange}
                                      autocomplete="off"
                                    />
                                  </Form.Group>
                                </Form>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  Close
                                </Button>
                                <Button variant="primary" onClick={addTask}>
                                  Save Changes
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {projectData.tasks.map((projId) => {
                          console.log("projectData: ", projectData);
                          // console.log("dropdownHelpers: ", dropdownHelpers);

                          return (
                            <tr key={projId._id}>
                              <td>{projId._id.slice(-5)}</td>
                              <td>{projId.taskTitle}</td>
                              <td>{projId.startDate}</td>
                              <td>{projId.dueDate}</td>
                              <td>
                                <Dropdown
                                // onToggle={() => setOpen(!open)}
                                // show={open}
                                >
                                  <Dropdown.Toggle
                                    as={CustomUserAddToggle}
                                    id="dropdown-custom-components"
                                  >
                                    View/add users:
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu as={taskMenu}>
                                    <Dropdown.Header>
                                      Add a member:
                                    </Dropdown.Header>

                                    <Form.Control
                                      autoFocus
                                      className="mx-3 my-2 w-auto"
                                      placeholder="Search to add..."
                                      autocomplete="off"
                                      onChange={(e) => {
                                        if (e.target.value.length <= 1) {
                                          setGetSearchData(false);
                                        } else {
                                          axios
                                            .get(
                                              `/api/user/finduser/${e.target.value}`
                                            )
                                            .then((res) => {
                                              // console.log("res: ", res.data);
                                              setSearchList(res.data);
                                              setGetSearchData(true);
                                            })
                                            .catch((err) =>
                                              console.log("err: ", err)
                                            );
                                        }
                                        setValue(e.target.value);
                                      }}
                                      value={value}
                                    />
                                    <Dropdown.Divider />
                                    {getSearchData ? (
                                      searchList.map((searchItem) => {
                                        return (
                                          <Dropdown.Item key={searchItem._id}>
                                            <Form>
                                              <Form.Check
                                                type="switch"
                                                id="checkbox"
                                                checked={checked}
                                                onChange={() =>
                                                  setChecked(!checked)
                                                }
                                                label={searchItem.username}
                                                feedback
                                              />
                                            </Form>
                                            {}
                                          </Dropdown.Item>
                                        );
                                      })
                                    ) : (
                                      <Dropdown.Item
                                        eventKey="1"
                                        // onClick={console.log(
                                        //   "searchList",
                                        //   searchList
                                        // )}
                                      >
                                        Bleep
                                      </Dropdown.Item>
                                    )}
                                  </Dropdown.Menu>
                                </Dropdown>
                              </td>
                              <td>{projId.priority}</td>
                              <td>{projId.status}</td>
                              <td colSpan={2}>
                                {projectData.members[0].username}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </Tab.Pane>
                  <Tab.Pane eventKey="2">
                    <div>bleep bloop again for</div>
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
