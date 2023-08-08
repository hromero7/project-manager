import React from "react";
import { Col, Form } from "react-bootstrap";

export default function TargetAudience(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>Tell us about your audience. Who do you serve?</Form.Label>
        <Form.Control
          name="targetAudience"
          value={props.productValues.targetAudience}
          onChange={props.handleFormData}
          autoComplete="off"
          required
        />
        {/* Need the ability to add multiple audiences after each selection. */}
        {/* What do they want to achieve in this area?  */}
        {/* What are they worried about or trying to avoid? */}
        {/* What other beliefs or circumstances do they have that might affect their ability or desire to purchase from you? */}
        <Form.Control.Feedback type="invalid">
          Please provide a response.
        </Form.Control.Feedback>
      </Form.Group>
    </Col>
  );
}
