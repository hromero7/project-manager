import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Dropdown, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProjectAPI from "../../Utils/ProjectAPI";
import TaskModal from "../../Components/TaskModal/TaskModal";
import TaskActionMenu from "../../Components/TaskActionMenu/TaskActionMenu";
import "./TaskPage.css";
import TaskAssignee from "../../Components/TaskAssignee/TaskAssignee";
import axios from "axios";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

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
      <Row className="task-row">
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
                        placeholder="Search by username"
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
                          setValue(e.target.value);
                        }}
                        value={value}
                      />
                    </Form>
                  </Dropdown.Item>
                  {searchList.map((item) => {
                    return (
                      <Dropdown.Item
                        onClick={() => {
                          axios
                            .put(`/api/project/add_member/${ID}`, {
                              username: item.username,
                              userId: item._id,
                            })
                            .then((res) => {
                              console.log("res: ", res);
                              getProjData();
                            })
                            .catch((err) => {
                              console.log("err: ", err);
                            });
                        }}
                      >
                        {item.firstName}
                      </Dropdown.Item>
                    );
                  })}
                  <Dropdown.Divider />
                  <Dropdown.Header
                    onClick={() => {
                      console.log("projectData: ", projectData);
                    }}
                  >
                    Members:
                  </Dropdown.Header>
                  {projectData.members.map((member) => {
                    // console.log("member: ", member);
                    return (
                      <DropdownItem>
                        <Row>
                          <Col>{member.username}</Col>
                          <Col>
                            <i
                              onClick={() => {
                                axios
                                  .delete(`/api/project/delete_member/${ID}`, {
                                    data: {
                                      userId: member.id,
                                      username: member.username,
                                      docId: member._id,
                                    },
                                  })
                                  .then((res) => {
                                    getProjData();
                                  })
                                  .catch((err) => {
                                    console.log("err: ", err);
                                  });
                              }}
                              className="dropIcon fa-sharp fa-solid fa-xmark"
                            ></i>
                          </Col>
                        </Row>
                      </DropdownItem>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table className="task-col" striped hover responsive>
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
                    // console.log("projectData.tasks: ", projectData.tasks);
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
        </Col>
      </Row>
    </Container>
  );
};

export default TaskPage;
