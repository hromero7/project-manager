import { React } from "react";
import { Container } from "react-bootstrap";
import ProjectList from "../../Components/ProjectList/ProjectList";
import AssignedProjects from "../../Components/AssignedProjects/AssignedProjects";

const Dashboard = () => {
  return (
    <Container>
      <ProjectList />
      <h1>ASSIGNED PROJECTS</h1>
      <AssignedProjects />
    </Container>
  );
};

export default Dashboard;
