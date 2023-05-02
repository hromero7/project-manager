import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectAPI from "../../../Utils/ProjectAPI";

function Demote(props) {
  const demoteUser = async () => {
    const res = await ProjectAPI.demoteMember(props);
    console.log(`props: `, props);
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
          {/* <i className="fa-solid fa-heart fa-lg"></i> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Demote;
