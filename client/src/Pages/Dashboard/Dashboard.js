import { React } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import ProjectList from "../../Components/ProjectList/ProjectList";
import AssignedProjects from "../../Components/AssignedProjects/AssignedProjects";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <Container className="dashCont">
      <Tabs
        defaultActiveKey="projects"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="projects" title="Projects">
          <ProjectList />
        </Tab>
        <Tab eventKey="assigned" title="Assigned">
          <AssignedProjects />
        </Tab>
        <Tab eventKey="manage" title="Management">
          <h1>Bleep bloop</h1>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Dashboard;
