import React from "react";
import { Col, Form } from "react-bootstrap";

export default function BrandWebsite(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>Brand website:</Form.Label>
        <Form.Control
          name="brandWebsite"
          value={props.productValues.brandWebsite}
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
