import React from "react";
import { Col, Form } from "react-bootstrap";

export default function ShortTerm(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>What are your short term goals?:</Form.Label>
        <Form.Control
          name="shortTerm"
          value={props.productValues.shortTerm}
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
