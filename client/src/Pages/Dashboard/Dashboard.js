import { React } from "react";
import { Container } from "react-bootstrap";
import ProjectList from "../../Components/ProjectList/ProjectList";
import AssignedProjects from "../../Components/AssignedProjects/AssignedProjects";

const Dashboard = () => {
  return (
    <Container>
      <ProjectList />
      <AssignedProjects />
    </Container>
  );
};

export default Dashboard;
