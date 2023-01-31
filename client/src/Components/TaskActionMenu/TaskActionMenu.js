import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import TaskAPI from "../../Utils/TaskAPI";

const TaskActionMenu = (props) => {
  const [taskDeleteValues, setTaskDeleteValues] = useState({
    projectId: "",
    taskId: "",
    userId: "",
  });

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

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary">
        <i className="fa-solid fa-circle-info"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="1">
          Edit <i className="fa-regular fa-pen-to-square"></i>
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={deleteTask}>
          Delete <i className="fa-regular fa-trash-can"></i>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default TaskActionMenu;
