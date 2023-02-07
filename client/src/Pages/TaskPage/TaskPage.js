import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProjectAPI from "../../Utils/ProjectAPI";
import TaskModal from "../../Components/TaskModal/TaskModal";
import TaskActionMenu from "../../Components/TaskActionMenu/TaskActionMenu";
import TaskAssignee from "../../Components/TaskAssignee/TaskAssignee";
import MemberAdd from "../../Components/MemberAdd/MemberAdd";
import TitleChange from "../../Components/titleChange/TitleChange";
import DateTimePicker from "react-datetime-picker";

import "./TaskPage.css";

const TaskPage = () => {
  const { ID } = useParams();
  const [titleChange, setTitleChange] = useState(false);
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
      <Row className="taskRow">
        <Col>
          <Row>
            {titleChange ? (
              <TitleChange
                projectData={projectData}
                getProjData={getProjData}
                titleChange={titleChange}
                setTitleChange={setTitleChange}
              />
            ) : (
              <Col className="projTitleCont">
                <h1 className="projectTitle">{projectData.title}&nbsp;</h1>
                <i
                  onClick={() => {
                    setTitleChange((titleChange) => !titleChange);
                  }}
                  className="fa-solid fa-pen-to-square"
                ></i>
              </Col>
            )}
          </Row>
          <Row>
            <Col>
              <TaskModal projectId={ID} getProjData={getProjData} />
            </Col>
            <Col>
              <MemberAdd
                projectData={projectData}
                projectId={ID}
                getProjectData={getProjData}
              />
            </Col>
          </Row>

          <Row className="taskTable">
            <Col>
              <Container className="tableCont">
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
                          <td className="taskTitle">{task.taskTitle}</td>
                          <td>{task.status}</td>
                          <td>
                            <Row>
                              <Col>
                                <TaskAssignee
                                  projectId={projectData.id}
                                  projectData={projectData}
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
                          <td className="dueDateCol">
                            <Row>
                              <Col className="taskDatePickCont">
                                <DateTimePicker
                                  className="taskDatePick"
                                  placeholder={task.dueDate}
                                  value={task.dueDate}
                                  disabled={true}
                                  clearIcon={null}
                                  disableCalendar={true}
                                  calendarIcon={null}
                                  minDate={new Date()}
                                  // onChange={setDueDate}
                                />
                              </Col>

                              {/* <Col>
                                {dMonth}/{dDay}/{dYear}
                              </Col>
                              <Col
                                onClick={() => {
                                  console.log(task, dHour, dMinute);
                                }}
                              >
                                {dHour}:{dMinute}
                              </Col> */}
                            </Row>
                          </td>
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
                              task={task}
                              projectId={projectData.id}
                              userId={projectData.userId}
                              taskId={task._id}
                              getProjectData={getProjData}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskPage;
