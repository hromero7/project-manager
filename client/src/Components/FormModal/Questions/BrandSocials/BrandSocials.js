import React from "react";
import { Col, Form } from "react-bootstrap";
export default function BrandSocials(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>Brand Social & Marketing Links</Form.Label>
        <Form.Control
          name="brandName"
          value={props.productValues.brandSocials}
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
