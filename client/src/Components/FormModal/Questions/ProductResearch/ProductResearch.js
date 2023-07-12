import React from "react";
import { Col, Form } from "react-bootstrap";

export default function ProductResearch(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>
          Have you conducted any market research or gathered customer feedback?
        </Form.Label>
        <Form.Control
          name="productResearch"
          value={props.productValues.productResearch}
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
