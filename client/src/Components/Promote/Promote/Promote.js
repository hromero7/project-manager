import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectAPI from "../../../Utils/ProjectAPI";

function Promote(props) {
  const promoteUser = async () => {
    const res = await ProjectAPI.promoteMember(props);
    console.log(`props: `, props);
  };

  return (
    <Container>
      <Row>
        <Col>
          <i
            onClick={() => {
              promoteUser();
            }}
            className="fa-regular fa-heart fa-lg"
          ></i>
          {/* <i className="fa-solid fa-heart fa-lg"></i> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Promote;
