import React, { useEffect, useState, useContext } from "react";
import ProjectAPI from "../../Utils/ProjectAPI";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import DatePicker from "react-date-picker";

const AssignedProjects = () => {
  const auth = useContext(AuthContext);
  const [projectList, setProjectList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProjects();
  });

  const getProjects = async () => {
    const res = await ProjectAPI.getAssignedProjects(auth.user.username);
    setProjectList(res);
  };

  return (
    <Container>
      <h1>ASSIGNED PROJECTS</h1>
      <Row>
        {projectList ? (
          projectList.map((project) => {
            const dueDateSort = project.tasks.sort(
              (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
            );

            return (
              <Col key={project._id}>
                <Card
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
                        <Card.Text>
                          <DatePicker
                            placeholder={dueDateSort[0].dueDate}
                            value={dueDateSort[0].dueDate}
                            disabled={true}
                            clearIcon={null}
                            disableCalendar={true}
                            calendarIcon={null}
                          />
                        </Card.Text>
                      </>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <div>Loading</div>
        )}
      </Row>
    </Container>
  );
};

export default AssignedProjects;
