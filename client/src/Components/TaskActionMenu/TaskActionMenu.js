import React, { useEffect, useState } from "react";
import {
  Dropdown,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Alert,
} from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import TaskAPI from "../../Utils/TaskAPI";
import PriorityLevel from "../PriorityLevel/PriorityLevel";
import "./TaskActionMenu.css";

const TaskActionMenu = (props) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({ body: "", error: false });
  const [startDate, setStartDate] = useState(new Date(props.task.startDate));
  const [dueDate, setDueDate] = useState(new Date(props.task.dueDate));
  const [taskDeleteValues, setTaskDeleteValues] = useState({
    projectId: "",
    taskId: "",
    userId: "",
  });
  const [taskValues, setTaskValues] = useState({
    taskTitle: props.task.taskTitle,
    startDate: props.task.startDate,
    dueDate: props.task.dueDate,
    priority: props.task.priority,
  });

  const handleTaskFormChange = (e) => {
    setTaskValues({ ...taskValues, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setTaskDeleteValues({
      projectId: props.projectId,
      taskId: props.taskId,
      userId: props.userId,
    });
  }, [props.projectId, props.taskId, props.userId]);

  const deleteTask = async () => {
    const res = await TaskAPI.deleteTask(
      props.projectId,
      props.taskId,
      taskDeleteValues
    );
    setMessage(res.message.msgBody);
    props.getProjectData();
    console.log(res);
  };

  const updateTask = () => {
    handleShow();
    console.log(`taskItems: `, taskValues);
    console.log(`props: `, typeof props.task.dueDate);
  };

  const sendUpdate = async (response) => {
    const sup = await TaskAPI.updateTask(
      props.projectId,
      props.taskId,
      taskValues,
      startDate,
      dueDate
    );
    console.log(`sup.message.msgBody: `, sup.message.msgBody);
    setMessage(sup.message.msgBody);
    handleClose();
  };

  const handleClose = () => {
    setShow(false);
    props.getProjectData();
  };

  const handleShow = () => setShow(true);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary">
        <i className="fa-solid fa-circle-info"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu className="TADD">
        <Dropdown.Item eventKey="1" className="TAI" onClick={updateTask}>
          Edit <i className="fa-regular fa-pen-to-square"></i>
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" className="TAI" onClick={deleteTask}>
          Delete <i className="fa-regular fa-trash-can"></i>
        </Dropdown.Item>
      </Dropdown.Menu>
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
                autoComplete="off"
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
                    placeholder={props.task.startDate}
                    name="startDate"
                    value={startDate}
                    showTime={{ use12Hours: true, format: "hh:mm a" }}
                    format="MMM dd y hh:mm a"
                    locale="en"
                    disableClock
                    onChange={setStartDate}
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
                    placeholder={taskValues.dueDate}
                    name="dueDate"
                    value={dueDate}
                    showTime={{ use12Hours: true, format: "hh:mm a" }}
                    format="MMM dd y hh:mm a"
                    locale="en"
                    disableClock
                    onChange={setDueDate}
                  />
                </Col>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formEndDate">
              <Form.Label>Priority:</Form.Label>
              <PriorityLevel
                taskValues={taskValues}
                priority={taskValues.priority}
                projectId={props.projectId}
                getProjData={props.getProjectData}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              sendUpdate();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Dropdown>
  );
};

export default TaskActionMenu;
