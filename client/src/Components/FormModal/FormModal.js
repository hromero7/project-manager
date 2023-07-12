import React, { useContext, useState } from "react";
import { Container, Row, Col, Modal, Form, Button } from "react-bootstrap";
import { AuthContext } from "../../Context/AuthContext";
import AIRoute from "../../Utils/AIAPI";
import "./FormModal.css";
import ProductName from "./Questions/ProductName/ProductName";
import ProductDescription from "./Questions/ProductDescription/ProductDescription";
import UniqueFeatures from "./Questions/UniqueFeatures/UniqueFeatures";
import ProductChallenges from "./Questions/ProductChallenges/ProductChallenges";
import BrandPersonality from "./Questions/BrandPersonality/BrandPersonality";
import ProductVision from "./Questions/ProductVision/ProductVision";
import ProductResearch from "./Questions/ProductResearch/ProductResearch";
import CallToAction from "./Questions/CallToAction/CallToAction";
import DistributionChannels from "./Questions/DistributionChannels/DistributionChannels";
import Competitors from "./Questions/Competitors/Competitors";

const FormModal = (props) => {
  const [open, setOpen] = useState(false);
  const [productValues, setProductValues] = useState({
    productName: "",
    productDescription: "",
    uniqueFeatures: "",
    productChallenges: "",
    brandPersonality: "",
    productVision: "",
    productResearch: "",
    callToAction: "",
    distrobutionChannels: "",
    competitors: "",
  });

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
                    productValues={productValues}
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
                  />
                </Row>
                <Row>
                  <BrandPersonality
                    productValues={productValues}
                    handleFormData={handleFormData}
                  />
                </Row>

                <Row>
                  <ProductVision
                    productValues={productValues}
                    handleFormData={handleFormData}
                  />
                </Row>
                <Row>
                  <ProductResearch
                    productValues={productValues}
                    handleFormData={handleFormData}
                  />
                </Row>
                <Row>
                  <CallToAction
                    productValues={productValues}
                    handleFormData={handleFormData}
                  />
                </Row>
                <Row>
                  <DistributionChannels
                    productValues={productValues}
                    handleFormData={handleFormData}
                  />
                </Row>
                <Row>
                  <Competitors
                    productValues={productValues}
                    handleFormData={handleFormData}
                  />
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
