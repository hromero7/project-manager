import React from "react";
import { Col, Form } from "react-bootstrap";

export default function LongTerm(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>What are your long term goals?:</Form.Label>
        <Form.Control
          name="shortTerm"
          value={props.productValues.longTerm}
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
