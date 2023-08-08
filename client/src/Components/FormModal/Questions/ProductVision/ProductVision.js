import React from "react";
import { Col, Form } from "react-bootstrap";

export default function ProductVision(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>
          How do you envision your product being used or integrated into
          customers' lives?
        </Form.Label>
        <Form.Control
          name="productVision"
          value={props.productValues.productVision}
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
