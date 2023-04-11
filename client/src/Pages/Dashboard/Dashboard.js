import { React } from "react";
import { Container } from "react-bootstrap";
import ProjectList from "../../Components/ProjectList/ProjectList";
import AssignedProjects from "../../Components/AssignedProjects/AssignedProjects";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Container className="dashCont">
      <ProjectList />
      <AssignedProjects />
    </Container>
  );
};

export default Dashboard;
