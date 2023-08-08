import React from "react";
import { Col, Form } from "react-bootstrap";

export default function CallToAction(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>
          Are there any specific messages or call-to-actions you want to convey?
        </Form.Label>
        <Form.Control
          name="callToAction"
          value={props.productValues.callToAction}
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
