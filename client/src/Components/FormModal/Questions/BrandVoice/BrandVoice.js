import React from "react";
import { Col, Form } from "react-bootstrap";
export default function BrandVoice(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>Tell us about your desired brand voice.</Form.Label>
        <Form.Control
          name="brandName"
          value={props.productValues.brandVoice}
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
