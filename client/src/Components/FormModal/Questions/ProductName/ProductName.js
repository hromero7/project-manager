import React from "react";
import { Col, Form } from "react-bootstrap";

export default function ProductName(props) {
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 500) {
      props.handleFormData(event);
    }
  };

  const productQuestion1 = props.productValues?.question1 || "";

  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>What is the product name?</Form.Label>
        <Form.Control
          name="question1"
          value={productQuestion1}
          onChange={handleInputChange}
          autoComplete="off"
          required
          isInvalid={productQuestion1.length > 500}
        />
        <Form.Control.Feedback type="invalid">
          {productQuestion1.length > 500 && (
            <span>Too many characters. Maximum limit is 500.</span>
          )}
          {!productQuestion1 && <span>Please provide a response.</span>}
        </Form.Control.Feedback>
      </Form.Group>
    </Col>
  );
}
