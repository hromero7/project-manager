import React from "react";
import { Col, Form } from "react-bootstrap";

export default function Competitors(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>
          Do you have any specific competitors or benchmark products?
        </Form.Label>
        <Form.Control
          name="competitors"
          value={props.productValues.competitors}
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
