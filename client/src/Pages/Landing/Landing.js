import React from "react";
import { Container } from "react-bootstrap";
import HeroPanel from "./HeroPanel/HeroPanel";
import ProductDescription from "./ProductDescription/ProductDescription";
import "./Landing.css";
import Footer from "../../Components/Assets/Footer/Footer";

const LandingPage = () => {
  return (
    <Container className="landingContainer landing" fluid>
      <HeroPanel data-testid="landingComponent" />
      <ProductDescription />
      <Footer />
    </Container>
  );
};

export default LandingPage;
