import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Col,
  Row,
  Dropdown,
  Table,
  Form,
  Button,
} from "react-bootstrap";
import ProjectAPI from "../../Utils/ProjectAPI";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./ProjectTable.css";

const ProjectTable = (props) => {
  const auth = useContext(AuthContext);
  const [percentage, setPercentage] = useState([
    Array(props.projectData.length).fill(0),
  ]);
  const [projectTitle, setProjectTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    props.projectData
      ? props.projectData.map((project, i) => {
          progress(project._id, i);
        })
      : setPercentage([Array(props.projectData.length).fill(0)]);
  }, [props]);

  const progress = async (projectId, index) => {
    const res = await ProjectAPI.projectProgress(projectId);
    let newState = percentage.slice();
    newState[0][index] = res;
    setPercentage(newState);
  };

  const addProject = async () => {
    const newProject = await ProjectAPI.createProject(projectTitle);
    if (!newProject.message.msgError) {
      console.log(`newProject: `, newProject);
    } else {
      console.log(newProject);
    }
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Dropdown
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &nbsp;
      <i className="fa-sharp fa-solid fa-plus "></i>
    </Dropdown>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, className, "aria-labelledby": labeledBy }, ref) => {
      return (
        <div ref={ref} className={className} aria-labelledby={labeledBy}>
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="New project title:"
            onChange={(e) => {
              setProjectTitle(e.target.value);
            }}
            value={projectTitle}
            autocomplete="off"
          />
          <ul className="list-unstyled">{React.Children.toArray(children)}</ul>
        </div>
      );
    }
  );

  return (
    <Container className="dashboard-projects" fluid>
      <Row>
        <Col>
          <div>3RD v1.0 / Project Dashboard / Projects</div>
        </Col>
        <Row>
          <Row>
            <Col>
              <Dropdown className="prj">
                <Dropdown.Toggle as={CustomToggle}>Add Project</Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1">
                    <Button
                      onClick={(e) => {
                        addProject();
                      }}
                    >
                      Submit
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Row>
      </Row>

      <Row>
        <Table hover responsive className="dashboard-table">
          <thead className="dashboard-table-header">
            <tr>
              <th>Project Name</th>
              <th>Project Manager</th>
              <th>Members</th>
              <th>Progress</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="dashboard-table-body">
            {props.projectData ? (
              props.projectData.map((project, i) => {
                return (
                  <tr
                    key={i}
                    onClick={() => {
                      navigate(`/project/${project._id}`);
                      // console.log(`project: `, project);
                    }}
                  >
                    <td>{project.title}</td>
                    <td>{project.members[0].username}</td>
                    <td>
                      {project.members.map((member, index) => {
                        return (
                          <div className="user-circle" key={index}>
                            {member.username[0].toUpperCase()}
                          </div>
                        );
                      })}
                    </td>
                    <td>
                      <div style={{ width: "40px", height: "40px" }}>
                        {percentage.map((item) => {
                          return (
                            <CircularProgressbar
                              value={item[i]}
                              text={`${item[i]}%`}
                              styles={buildStyles({
                                textSize: "34px",
                              })}
                            />
                          );
                        })}
                        {/* <CircularProgressbar
                                value={percentage[i]} text={`${percentage[i]}%`}
                                styles={buildStyles({
                                    textSize: "34px"
                                })}/> */}
                      </div>
                    </td>
                    <td>
                      <button>
                        <i className="fa-solid fa-ellipsis"></i>
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>Loading</div>
            )}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default ProjectTable;
