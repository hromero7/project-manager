import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Promote(props) {
  const promoteUser = () => {
    console.log(`heartClicked: `, props);
  };
  const demoteUser = () => {
    console.log(`heartClicked: `, props);
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
