import React from "react";
import { Col, Form } from "react-bootstrap";

export default function ProductChallenges(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>
          What is your brand personality or tone of voice?
        </Form.Label>
        <Form.Control
          name="brandPersonality"
          value={props.productValues.brandPersonality}
          onChange={props.handleFormData}
          autoComplete="off"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a response.
        </Form.Control.Feedback>
      </Form.Group>
    </Col>
  );
}
