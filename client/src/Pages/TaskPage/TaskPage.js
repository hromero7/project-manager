import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Dropdown, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProjectAPI from "../../Utils/ProjectAPI";
import TaskModal from "../../Components/TaskModal/TaskModal";
import TaskActionMenu from "../../Components/TaskActionMenu/TaskActionMenu";
import "./TaskPage.css";
import TaskAssignee from "../../Components/TaskAssignee/TaskAssignee";
import MemberAdd from "../../Components/MemberAdd/MemberAdd";

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
              <MemberAdd
                getProjectData={getProjData}
                projectData={projectData}
              />
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
                          <Row>
                            <Col>
                              <TaskAssignee
                                projectId={projectData.id}
                                taskId={task._id}
                                assignee={task.assignee}
                                getProjectData={getProjData}
                              />
                            </Col>
                            <Col>
                              {task.assignee.map((assignee) => {
                                return <div>{assignee.username}</div>;
                              })}
                            </Col>
                          </Row>
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
