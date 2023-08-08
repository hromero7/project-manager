import React from "react";
import { Col, Form } from "react-bootstrap";

export default function ProductChallenges(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>What sort of challenges have you encountered?</Form.Label>
        <Form.Control
          name="productChallenges"
          value={props.productValues.productChallenges}
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
