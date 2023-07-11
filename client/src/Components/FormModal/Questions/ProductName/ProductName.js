import React from "react";
import { Col, Form } from "react-bootstrap";

export default function ProductName(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>What is the products name?</Form.Label>
        <Form.Control
          name="productName"
          value={props.productValues.productName}
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
