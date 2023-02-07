import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import TaskAPI from "../../Utils/TaskAPI";
import "./TaskModal.css";

const TaskModal = (props) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({ body: "", error: false });
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [taskValues, setTaskValues] = useState({
    taskTitle: "",
    startTime: startTime,
    endTime: endTime,
    priority: "",
  });

  const clearMessage = () => {
    setTimeout(() => {
      setMessage({ body: "", error: false });
    }, 4000);
  };
  const resetForm = () => {
    setTaskValues({
      taskTitle: "",
      startTime: new Date(),
      endTime: new Date(),
      priority: "",
    });
    clearMessage();
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
    console.log(`taskValues: `, taskValues);
  };

  const addTask = async () => {
    if (taskValues.taskTitle === "" || taskValues.priority === "") {
      setMessage({ body: "Please fill out all fields.", error: true });
      clearMessage();
    } else {
      const createTask = await TaskAPI.createTask(
        props.projectId,
        taskValues,
        startTime,
        endTime
      );
      setMessage({
        body: createTask.message.msgBody,
        error: createTask.message.msgError,
      });
      resetForm();
      setShow(false);
      props.getProjData();
      console.log(`taskValues: `, taskValues);
    }
  };

  const handleTaskFormChange = (e) => {
    setTaskValues({ ...taskValues, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Row>
        <Col className="addNewBtnCont" xs={3}>
          <Button className="addNewBtn" onClick={handleShow}>
            Add New
          </Button>
        </Col>
        <Col className="alertCont">
          {message.body && message.error === false ? (
            <Alert key="success" variant="success">
              {message.body}
            </Alert>
          ) : (
            ""
          )}
          <Modal show={show} onHide={handleClose} style={{ color: "black" }}>
            <Modal.Header closeButton>
              <Modal.Title>Task details:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {message.error ? (
                <Alert key="danger" variant="danger">
                  {message.body}
                </Alert>
              ) : (
                ""
              )}
              <Form>
                <Form.Group className="mb-3" controlId="formTaskTitle">
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

                <Row>
                  <Form.Group className="mb-3" controlId="formStartDate">
                    <Col>
                      <Form.Label>Start:</Form.Label>
                    </Col>
                    <Col>
                      <DateTimePicker
                        className="taskModalTP"
                        value={startTime}
                        format="MMM dd y H:mm a"
                        locale="en"
                        disableClock
                        onChange={setStartTime}
                      />
                    </Col>
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group className="mb-3" controlId="formEndDate">
                    <Col>
                      <Form.Label>End:</Form.Label>
                    </Col>
                    <Col>
                      <DateTimePicker
                        className="taskModalTP"
                        value={endTime}
                        format="MMM dd y H:mm a"
                        locale="en"
                        disableClock
                        onChange={setEndTime}
                      />
                    </Col>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formEndDate">
                  <Form.Label>Priority:</Form.Label>
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
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={addTask}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskModal;
