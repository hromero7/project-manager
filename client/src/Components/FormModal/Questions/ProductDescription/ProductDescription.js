import React from "react";
import { Col, Form } from "react-bootstrap";

export default function ProductDescription(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="productDescription"
          value={props.productValues.productDescription}
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
