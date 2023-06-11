import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import ProjectList from "../../Components/ProjectList/ProjectList";
import ProjectTable from "../../Components/ProjectTable/ProjectTable";
import { AuthContext } from "../../Context/AuthContext";
import ProjectAPI from "../../Utils/ProjectAPI";
import "./Dashboard.css";

const Dashboard = () => {
  const auth = useContext(AuthContext);
  const [projectOverview, setProjectOverview] = useState(true);
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const res = await ProjectAPI.getAssignedProjects(auth.user.username);
    setProjectData(res.body);
  };

  return (
    <Container className="dashboard-container">
      <div className="project-view">
        <button
          className={projectOverview ? "btn-active" : "view-btn"}
          onClick={() => setProjectOverview(true)}
        >
          <i className="fa-solid fa-table-list"></i>
        </button>

        <button
          className={projectOverview === false ? "btn-active" : "view-btn"}
          onClick={() => setProjectOverview(false)}
        >
          <i className="fa-solid fa-table-cells"></i>
        </button>
      </div>
      {projectOverview ? (
        <ProjectTable projectData={projectData} />
      ) : (
        <ProjectList projectData={projectData} />
      )}
    </Container>
  );
};

export default Dashboard;
