import React, { useEffect, useState } from "react";
import {
  Dropdown,
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Alert,
} from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import TaskAPI from "../../Utils/TaskAPI";

const TaskActionMenu = (props) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({ body: "", error: false });
  const [startDate, setStartDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
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
  }, []);

  const deleteTask = async () => {
    const res = await TaskAPI.deleteTask(
      props.projectId,
      props.taskId,
      taskDeleteValues
    );
    props.getProjectData();
    console.log(res);
  };

  const updateTask = () => {
    handleShow();
  };

  const sendUpdate = async (response) => {
    const sup = await TaskAPI.updateTask(
      props.projectId,
      props.taskId,
      taskValues
    );
    // console.log(`sup: `, sup);
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

      <Dropdown.Menu>
        <Dropdown.Item eventKey="1" onClick={updateTask}>
          Edit <i className="fa-regular fa-pen-to-square"></i>
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={deleteTask}>
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
                autocomplete="off"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formStartDate">
              <Form.Label>Start:</Form.Label>
              <DateTimePicker value={startDate} onChange={setStartDate} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEndDate">
              <Form.Label>End:</Form.Label>
              <DateTimePicker
                placeholder={props.task.dueDate}
                value={dueDate}
                onChange={setDueDate}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEndDate">
              <Form.Label>Priority:</Form.Label>
              <Form.Control
                type="text"
                name="priority"
                placeholder={props.task.priority}
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
          <Button
            variant="primary"
            onClick={() => {
              // sendUpdate();
              console.log(`Startdate: `, startDate);
              console.log(`taskValyes: `, taskValues);
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
