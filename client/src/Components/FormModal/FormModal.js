import React, { useContext, useState } from "react";
import { Container, Row, Col, Modal, Form, Button } from "react-bootstrap";
import { AuthContext } from "../../Context/AuthContext";
import AIRoute from "../../Utils/AIAPI";
import "./FormModal.css";
import BrandName from "./Questions/BrandName/BrandName";
import UniqueFeatures from "./Questions/UniqueFeatures/UniqueFeatures";
import ProductChallenges from "./Questions/ProductChallenges/ProductChallenges";
import BrandPersonality from "./Questions/BrandPersonality/BrandPersonality";
import ProductVision from "./Questions/ProductVision/ProductVision";
import ProductResearch from "./Questions/ProductResearch/ProductResearch";
import CallToAction from "./Questions/CallToAction/CallToAction";
import DistributionChannels from "./Questions/DistributionChannels/DistributionChannels";
import Competitors from "./Questions/Competitors/Competitors";
import BrandWebsite from "./Questions/BrandWebsite/BrandWebsite";
import BrandDescription from "./Questions/BrandDescription/BrandDescription";
import BrandSocials from "./Questions/BrandSocials/BrandSocials";
import ShortTerm from "./Questions/ShortTerm/ShortTerm";
import LongTerm from "./Questions/LongTerm/LongTerm";
import Credibility from "./Questions/Credibility/Credibility";
import BrandVoice from "./Questions/BrandVoice/BrandVoice";
import ExcludeTerms from "./Questions/ExcludeTerms/ExcludeTerms";

const FormModal = (props) => {
  const [open, setOpen] = useState(false);
  const [productValues, setProductValues] = useState({
    brandName: "",
    brandWebsite: "",
    brandSocials: "",
    brandDescription: "",
    brandPersonality: "",
    shortTerm: "",
    longTerm: "",
    credibility: "",
    callToAction: "",
    targetAudience: "",
    brandVoice: "",
    excludeTerms: "",
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
                  <BrandName
                    productValues={productValues}
                    handleFormData={handleFormData}
                  />
                </Row>
                <Row>
                  <BrandWebsite
                    productValues={productValues}
                    handleFormData={handleFormData}
                  />
                </Row>
                <Row>
                  <BrandSocials
                    productValues={productValues}
                    handleFormData={handleFormData}
                  />
                </Row>
                <Row>
                  <BrandDescription
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
                  <ShortTerm
                    productValues={productValues}
                    handleFormData={handleFormData}
                  />
                </Row>
                <Row>
                  <LongTerm
                    productValues={productValues}
                    handleFormData={handleFormData}
                  />
                </Row>
                <Row>
                  <Credibility
                    productValues={productValues}
                    handleFormData={handleFormData}
                  />
                </Row>
                <Row>
                  <BrandVoice
                    productValues={productValues}
                    handleFormData={handleFormData}
                  />
                </Row>
                <Row>
                  <ExcludeTerms
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
