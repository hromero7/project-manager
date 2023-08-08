import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function UniqueFeatures(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>What makes this unique?</Form.Label>
        <Form.Control
          name="uniqueFeatures"
          value={props.productValues.uniqueFeatures}
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
