import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Dropdown,
  Form,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProjectAPI from "../../Utils/ProjectAPI";
import { AuthContext } from "../../Context/AuthContext";
import TaskModal from "../../Components/TaskModal/TaskModal";
import TaskActionMenu from "../../Components/TaskActionMenu/TaskActionMenu";
import "./TaskPage.css";
import TaskAssignee from "../../Components/TaskAssignee/TaskAssignee";
import axios from "axios";

const TaskPage = () => {
  const { ID } = useParams();
  const [projectData, setProjectData] = useState({
    date: "",
    members: [],
    tasks: [],
    title: "",
    userId: "",
    id: "",
  });
  const [value, setValue] = useState();
  const [getSearchData, setGetSearchData] = useState();
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    getProjData();
  }, []);

  const getProjData = () => {
    ProjectAPI.getOneProject(ID).then((response) => {
      // console.log("line 27", response)
      setProjectData({
        date: response.date,
        members: response.members,
        tasks: response.tasks,
        title: response.title,
        userId: response.userId,
        id: response._id,
      });
    });
  };
  return (
    <Container className="task-container">
      <Row>
        <Col>
          <Row>
            <Col>
              <h1>{projectData.title}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <TaskModal projectId={ID} getProjData={getProjData} />
            </Col>
            <Col>
              <Dropdown autoClose="outside">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Add members:
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <Dropdown.Header>Add members:</Dropdown.Header>
                    <Form>
                      <Form.Control
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Search to add..."
                        autoComplete="off"
                        onChange={(e) => {
                          if (e.target.value.length <= 1) {
                            setSearchList([]);
                            setGetSearchData(false);
                          } else {
                            axios
                              .get(`/api/user/finduser/${e.target.value}`)
                              .then((res) => {
                                setSearchList(res.data);
                                setGetSearchData(true);
                              })
                              .catch((err) => console.log("err: ", err));
                          }
                          console.log("searchList: ", searchList);
                          setValue(e.target.value);
                        }}
                        value={value}
                      />
                    </Form>
                  </Dropdown.Item>
                  {searchList.map((item) => {
                    return (
                      <Dropdown.Item href="#/action-2">
                        {item.firstName}
                      </Dropdown.Item>
                    );
                  })}
                  <Dropdown.Divider />
                  <Dropdown.Header>Members:</Dropdown.Header>
                  <Dropdown.Item href="#/action-3">Member pool</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          <Table striped hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Status</th>
                <th>Assignee</th>
                <th>Due date</th>
                <th>Priority</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projectData.tasks.map((task, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{task.taskTitle}</td>
                    <td>{task.status}</td>
                    <td>
                      {task.assignee.map((assignee) => {
                        return <div>{assignee.username}</div>;
                      })}
                      <TaskAssignee
                        projectId={projectData.id}
                        taskId={task._id}
                        assignee={task.assignee}
                        getProjectData={getProjData}
                      />
                    </td>
                    <td>{task.dueDate}</td>
                    <td>
                      <span
                        className={`task-priority ${
                          task.priority === "High"
                            ? "priority-high"
                            : task.priority === "Medium"
                            ? "priority-medium"
                            : "priority-low"
                        }`}
                      >
                        {task.priority}
                      </span>
                    </td>
                    <td>
                      <TaskActionMenu
                        projectId={projectData.id}
                        taskId={task._id}
                        getProjectData={getProjData}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskPage;
