import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectAPI from "../../../Utils/ProjectAPI";

function Demote(props) {
  const demoteUser = async () => {
    const res = await ProjectAPI.demoteMember(props);
    if (res.status === 200) {
      props.props.getProjectData();
    } else {
      console.log(`Error message: `, res.data.message);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <i
            onClick={() => {
              demoteUser();
            }}
            className="fa-solid fa-heart fa-lg"
          ></i>
        </Col>
      </Row>
    </Container>
  );
}

export default Demote;
