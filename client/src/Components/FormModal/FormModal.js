import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Form,
  Button,
  Dropdown,
  Alert,
} from "react-bootstrap";
import { AuthContext } from "../../Context/AuthContext";
import AIRoute from "../../Utils/AIAPI";
import "./FormModal.css";
import ProductName from "./Questions/ProductName/ProductName";
import ProductDescription from "./Questions/ProductDescription/ProductDescription";
import UniqueFeatures from "./Questions/UniqueFeatures/UniqueFeatures";
import ProductChallenges from "./Questions/ProductChallenges/ProductChallenges";

const FormModal = (props) => {
  const [open, setOpen] = useState(false);

  const [challengeValues, setChallengeValues] = useState([]);
  const [uniqueFeatures, setUniqueFeatures] = useState([]);
  const [checkboxValues, setCheckboxValues] = useState({});
  const [productValues, setProductValues] = useState({
    productName: "",
    productDescription: "",
    uniqueFeatures: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
  });

  useEffect(() => {
    setProductValues((prevValues) => ({
      ...prevValues,
      question4: challengeValues,
    }));

    setUniqueFeatures();
  }, [challengeValues]);

  // const handleCategorySelection = (value) => {
  //   setCategorySelection(value);
  //   setProductValues((prevProductValues) => ({
  //     ...prevProductValues,
  //     question2: value,
  //   }));
  // };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { user } = useContext(AuthContext);

  const handleFormData = (e) => {
    setProductValues({ ...productValues, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    const { name, checked } = e.target;

    setCheckboxValues((prevCheckboxValues) => ({
      ...prevCheckboxValues,
      [name]: checked,
    }));

    setProductValues((prevProductValues) => ({
      ...prevProductValues,
      question3: {
        ...prevProductValues.question3,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendQuestions = await AIRoute.sendQuestions(productValues, props);

    console.log(`sendQuestions: `, sendQuestions);
  };

  return (
    <>
      <Button onClick={handleOpen}>Product details</Button>
      <Modal show={open} onHide={handleClose}>
        <Container className="aiForm">
          <Row className="questionTitle">
            <Col>
              <h1
                onClick={() => {
                  console.log(`uniqueFeatures: `, uniqueFeatures);
                  console.log(`productValues: `, productValues);
                }}
              >
                Tell us about your product:
              </h1>
            </Col>
          </Row>
          <Container className="questionContainer">
            <Row className="questionForm">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <ProductName
                    productValues={productValues.productName}
                    handleFormData={handleFormData}
                  />
                </Row>
                <Row>
                  <ProductDescription
                    productValues={productValues}
                    handleFormData={handleFormData}
                  />
                </Row>
                <Row>
                  <UniqueFeatures
                    productValues={productValues}
                    handleFormData={handleFormData}
                  />
                </Row>
                <Row>
                  <ProductChallenges
                    productValues={productValues}
                    handleFormData={handleFormData}
                    challengeValues={challengeValues}
                    setChallengeValues={setChallengeValues}
                  />
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
                      <Form.Control.Feedback type="invalid">
                        Please provide a response.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formTaskTitle">
                      <Form.Label>
                        How do you envision your product being used or
                        integrated into customers' lives?
                      </Form.Label>
                      <Form.Control
                        name="question6"
                        value={productValues.question6}
                        onChange={handleFormData}
                        autoComplete="off"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a response.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formTaskTitle">
                      <Form.Label>
                        Have you conducted any market research or gathered
                        customer feedback?
                      </Form.Label>
                      <Form.Control
                        name="question7"
                        value={productValues.question7}
                        onChange={handleFormData}
                        autoComplete="off"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a response.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formTaskTitle">
                      <Form.Label>
                        Are there any specific messages or call-to-actions you
                        want to convey?
                      </Form.Label>
                      <Form.Control
                        name="question8"
                        value={productValues.question8}
                        onChange={handleFormData}
                        autoComplete="off"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a response.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formTaskTitle">
                      <Form.Label>
                        What are the distribution channels or mediums you plan
                        to use?
                      </Form.Label>
                      <Form.Control
                        name="question9"
                        value={productValues.question9}
                        onChange={handleFormData}
                        autoComplete="off"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a response.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formTaskTitle">
                      <Form.Label>
                        Do you have any specific competitors or benchmark
                        products?
                      </Form.Label>
                      <Form.Control
                        name="question10"
                        value={productValues.question10}
                        onChange={handleFormData}
                        autoComplete="off"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a response.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Button type="submit">Submit</Button>
              </Form>
            </Row>
          </Container>
        </Container>
      </Modal>
    </>
  );
};

export default FormModal;
