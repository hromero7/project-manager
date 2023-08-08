import React from "react";
import { Col, Form } from "react-bootstrap";

export default function Credibility(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>
          Build credibility. Why do you do what you do? What is your expertise
          in this area? What kind of results have you generated in the past?
        </Form.Label>
        <Form.Control
          name="credibility"
          value={props.productValues.credibility}
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
