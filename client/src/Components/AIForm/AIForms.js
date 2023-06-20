import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./AIForms.css";

export default function AIForms() {
  const [productValues, setProductValues] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
  });

  const handleFormData = (e) => {
    setProductValues({ ...productValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(`productValues: `, productValues);
  };

  return (
    <Container className="aiForm">
      <Row className="questionTitle">
        <Col>
          <h1>Tell us about your product:</h1>
        </Col>
      </Row>
      <Container className="questionContainer">
        <Row className="questionForm">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formTaskTitle">
                  <Form.Label>
                    What is the purpose or goal of your product?
                  </Form.Label>
                  <Form.Control
                    name="question1"
                    value={productValues.question1}
                    onChange={handleFormData}
                    autoComplete="off"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formTaskTitle">
                  <Form.Label>Who is your target audience?</Form.Label>
                  <Form.Control
                    name="question2"
                    value={productValues.question2}
                    onChange={handleFormData}
                    autoComplete="off"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formTaskTitle">
                  <Form.Label>
                    What are the unique features or benefits of your product?
                  </Form.Label>
                  <Form.Control
                    name="question3"
                    value={productValues.question3}
                    onChange={handleFormData}
                    autoComplete="off"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formTaskTitle">
                  <Form.Label>
                    What problems or challenges does your product solve?
                  </Form.Label>
                  <Form.Control
                    name="question4"
                    value={productValues.question4}
                    onChange={handleFormData}
                    autoComplete="off"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formTaskTitle">
                  <Form.Label>
                    What is your brand personality or tone of voice?
                  </Form.Label>
                  <Form.Control
                    name="question5"
                    value={productValues.question5}
                    onChange={handleFormData}
                    autoComplete="off"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formTaskTitle">
                  <Form.Label>
                    How do you envision your product being used or integrated
                    into customers' lives?
                  </Form.Label>
                  <Form.Control
                    name="question6"
                    value={productValues.question6}
                    onChange={handleFormData}
                    autoComplete="off"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formTaskTitle">
                  <Form.Label>
                    Have you conducted any market research or gathered customer
                    feedback?
                  </Form.Label>
                  <Form.Control
                    name="question7"
                    value={productValues.question7}
                    onChange={handleFormData}
                    autoComplete="off"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formTaskTitle">
                  <Form.Label>
                    Are there any specific messages or call-to-actions you want
                    to convey?
                  </Form.Label>
                  <Form.Control
                    name="question8"
                    value={productValues.question8}
                    onChange={handleFormData}
                    autoComplete="off"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formTaskTitle">
                  <Form.Label>
                    What are the distribution channels or mediums you plan to
                    use?
                  </Form.Label>
                  <Form.Control
                    name="question9"
                    value={productValues.question9}
                    onChange={handleFormData}
                    autoComplete="off"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formTaskTitle">
                  <Form.Label>
                    Do you have any specific competitors or benchmark products?
                  </Form.Label>
                  <Form.Control
                    name="question10"
                    value={productValues.question10}
                    onChange={handleFormData}
                    autoComplete="off"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <Button
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </Button>
        </Row>
      </Container>
    </Container>
  );
}
