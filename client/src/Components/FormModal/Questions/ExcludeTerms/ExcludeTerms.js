import React from "react";
import { Col, Form } from "react-bootstrap";

export default function ExcludeTerms(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>
          Are there any terms, phrases, or concepts you do not want in your
          brand copy?
        </Form.Label>
        <Form.Control
          name="brandName"
          value={props.productValues.excludeTerms}
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
