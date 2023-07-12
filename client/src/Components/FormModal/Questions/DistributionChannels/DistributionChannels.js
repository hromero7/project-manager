import React from "react";
import { Col, Form } from "react-bootstrap";

export default function DistributionChannels(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>
          What are the distribution channels or mediums you plan to use?
        </Form.Label>
        <Form.Control
          name="distrobutionChannels"
          value={props.productValues.distrobutionChannels}
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
