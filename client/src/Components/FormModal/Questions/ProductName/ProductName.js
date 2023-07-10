import React from "react";
import { Col, Form } from "react-bootstrap";

export default function ProductName(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>What is the products name?</Form.Label>
        <Form.Control
          name="question1"
          value={props.productValues.question1}
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
