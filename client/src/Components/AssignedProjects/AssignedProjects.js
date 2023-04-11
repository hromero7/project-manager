import React, { useEffect, useState, useContext } from "react";
import ProjectAPI from "../../Utils/ProjectAPI";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import DatePicker from "react-date-picker";

const AssignedProjects = () => {
  const auth = useContext(AuthContext);
  const [projectList, setProjectList] = useState([]);
  const [showProjects, setShowProjects] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const res = await ProjectAPI.getAssignedProjects(auth.user.username);
    if (res.message.status === 200) {
      setShowProjects(true);
      setProjectList(res.body);
    } else {
      setShowProjects(false);
    }
  };

  return (
    <Container className="projectListCont">
      {showProjects ? (
        <Container className="cardParent">
          <h1>ASSIGNED PROJECTS</h1>
          <Row className="cardItems">
            <Col className="cardContainer">
              <ul className="cardContainera">
                {projectList ? (
                  projectList.map((project, index) => {
                    const dueDateSort = project.tasks.sort(
                      (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
                    );
                    return (
                      <li key={index} className="cardContainerb">
                        <Col className="cardContent">
                          <Card
                            className="cardProject"
                            style={{
                              width: "18rem",
                              height: "200px",
                              margin: "15px",
                              color: "black",
                            }}
                            key={project._id}
                          >
                            <Card.Body
                              onClick={() => {
                                navigate(`/project/${project._id}`);
                              }}
                              style={{ cursor: "pointer" }}
                            >
                              <Card.Title>{project.title}</Card.Title>
                              {dueDateSort >= 0 ? (
                                ""
                              ) : (
                                <>
                                  <Card.Text>
                                    Due soon: {dueDateSort[0].taskTitle} &#64;
                                  </Card.Text>
                                  <DatePicker
                                    placeholder={dueDateSort[0].dueDate}
                                    value={dueDateSort[0].dueDate}
                                    disabled={true}
                                    clearIcon={null}
                                    disableCalendar={true}
                                    calendarIcon={null}
                                  />
                                </>
                              )}
                            </Card.Body>
                          </Card>
                        </Col>
                      </li>
                    );
                  })
                ) : (
                  <div>Loading</div>
                )}
              </ul>
            </Col>
          </Row>
        </Container>
      ) : (
        ""
      )}
    </Container>
  );
};

export default AssignedProjects;
