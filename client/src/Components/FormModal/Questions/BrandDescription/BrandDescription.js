import React from "react";
import { Col, Form } from "react-bootstrap";

export default function BrandDescription(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>
          Describe your brand. What do you do? What industries do you operate or
          serve?
        </Form.Label>
        <Form.Control
          name="productDescription"
          value={props.productValues.brandDescription}
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
