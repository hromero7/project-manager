import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Button,
  Table,
  Form,
  InputGroup,
  Modal,
} from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import "./ProjectPage.css";

export default function ProjectPage() {
  let pathname = window.location.pathname.slice(9);
  const [isClicked, setIsClicked] = useState(true);
  const [newProjectTask, setNewProjectTask] = useState();
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [taskValues, setTaskValues] = useState({
    taskTitle: "",
    startTime: startTime,
    endTime: endTime,
    priority: "",
  });
  const [projectData, setProjectData] = useState({
    date: "",
    members: [],
    tasks: [],
    title: "",
    userId: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect((e) => {
    axios
      .get(`/api/project/p/${pathname}`)
      .then((res) => {
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

  const addTask = () => {
    console.log("taskValues: ", taskValues);
    axios
      .post(`/api/task/create/${pathname}`, {
        taskTitle: taskValues.taskTitle,
        startDate: taskValues.startTime,
        dueDate: taskValues.endTime,
        priority: taskValues.priority,
      })
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  const handleTaskFormChange = (e) => {
    setTaskValues({ ...taskValues, [e.target.name]: e.target.value });
  };

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
                    <Nav.Link
                      eventKey="1"
                      onClick={() => {
                        console.log("taskValues: ", taskValues);
                      }}
                    >
                      My Tasks
                    </Nav.Link>
                    <Nav.Link
                      eventKey="2"
                      onClick={() => {
                        console.log("projectData: ", projectData);
                      }}
                    >
                      Collaborative Projects
                    </Nav.Link>
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
                        {projectData.tasks.map((taskItems) => (
                          <tr>
                            <td>{taskItems._id.slice(-5)}</td>
                            <td>{taskItems.taskTitle}</td>
                            <td>{taskItems.startDate}</td>
                            <td>{taskItems.dueDate}</td>
                            <td>assigned</td>
                            <td>{taskItems.priority}</td>
                            <td>{taskItems.status}</td>
                            <td>{taskItems.userId}</td>
                          </tr>
                        ))}
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
