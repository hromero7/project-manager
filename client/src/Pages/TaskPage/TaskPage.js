import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProjectAPI from "../../Utils/ProjectAPI";
import TaskModal from "../../Components/TaskModal/TaskModal";
import TaskActionMenu from "../../Components/TaskActionMenu/TaskActionMenu";
import TaskAssignee from "../../Components/TaskAssignee/TaskAssignee";
import MemberAdd from "../../Components/MemberAdd/MemberAdd";
import TitleChange from "../../Components/titleChange/TitleChange";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import Moment from "react-moment";
import "./TaskPage.css";
import PriorityLevel from "../../Components/PriorityLevel/PriorityLevel";

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
                      <th>
                        <Row>
                          <Col>#</Col>
                        </Row>
                      </th>
                      <th>
                        <Row>
                          <Col>Title</Col>
                        </Row>
                      </th>
                      <th>
                        <Row>
                          <Col>Status</Col>
                        </Row>
                      </th>
                      <th>
                        <Row>
                          <Col>Assignee</Col>
                        </Row>
                      </th>
                      <th>
                        <Row>
                          <Col>Due date</Col>
                        </Row>
                      </th>
                      <th>
                        <Row>
                          <Col>Priority</Col>
                        </Row>
                      </th>
                      <th>
                        <Row>
                          <Col>Action</Col>
                        </Row>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectData.tasks.map((task, i) => {
                      let newTime = new Date(task.dueDate);
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td className="taskTitle">
                            <Row>
                              <Col>{task.taskTitle}</Col>
                            </Row>
                          </td>
                          <td>
                            <Row>
                              <Col>{task.status}</Col>
                            </Row>
                          </td>
                          <td>
                            <Row>
                              <Col>
                                {task.assignee.map((assignee) => {
                                    return <div className="user-circle">
                                            {assignee.username[0].toUpperCase()}
                                           </div>;
                                })}
                              
                                <TaskAssignee
                                  projectId={projectData.id}
                                  projectData={projectData}
                                  taskId={task._id}
                                  assignee={task.assignee}
                                  getProjectData={getProjData}
                                />
                              </Col>
                    
                            </Row>
                          </td>
                          <td className="dueDateCol">
                            <Row>
                              <Col className="taskDatePickCont">
                                <Moment local format="MM/DD/YY hh:mm A">{task.dueDate}</Moment>
                                {/* <DatePicker
                                  placeholder={task.dueDate}
                                  value={task.dueDate}
                                  disabled={true}
                                  clearIcon={null}
                                  disableCalendar={true}
                                  calendarIcon={null}
                                  minDate={new Date()}
                                />
                                <TimePicker
                                  placeholder={newTime}
                                  value={newTime}
                                  disabled={true}
                                  clearIcon={null}
                                  clockIcon={null}
                                  locale="en"
                                /> */}
                              </Col>
                            </Row>
                          </td>
                          <td>
                            <Row>
                              <Col>
                                <PriorityLevel
                                  taskValues={task}
                                  priority={task.priority}
                                  projectId={projectData.id}
                                  getProjData={getProjData}
                                />
                              </Col>
                            </Row>
                          </td>
                          <td>
                            <Row>
                              <Col>
                                <TaskActionMenu
                                  task={task}
                                  projectId={projectData.id}
                                  userId={projectData.userId}
                                  taskId={task._id}
                                  getProjectData={getProjData}
                                />
                              </Col>
                            </Row>
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
