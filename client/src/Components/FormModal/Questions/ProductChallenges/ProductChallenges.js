import React from "react";
import { Col, Form } from "react-bootstrap";
import ElectronicsChallenges from "./ElectronicsChallenges/ElectronicsChallenges";

export default function ProductChallenges(props) {
  let challengeOptions;

  switch (props.question2) {
    case "Electronics":
      challengeOptions = <ElectronicsChallenges />;
      break;
    case "Fashion and Apparel":
      challengeOptions = <FashionAndApparelChallenges />;
    default:
      break;
  }

  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>
          What problems or challenges does your product solve?
        </Form.Label>
        {/* <Form.Control
          name="question4"
          value={props.productValues.question4}
          onChange={props.handleFormData}
          autoComplete="off"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a response.
        </Form.Control.Feedback> */}
        {challengeOptions}
      </Form.Group>
    </Col>
  );
}
