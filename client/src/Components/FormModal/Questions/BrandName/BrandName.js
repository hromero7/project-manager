import React from "react";
import { Col, Form } from "react-bootstrap";

export default function BrandName(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>Brand name:</Form.Label>
        <Form.Control
          name="brandName"
          value={props.productValues.brandName}
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
