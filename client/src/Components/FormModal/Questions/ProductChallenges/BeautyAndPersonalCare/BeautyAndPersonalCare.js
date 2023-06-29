import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function BeautyAndPersonalCare(props) {
  const [challengeItems, setChallengeItems] = useState([]);

  useEffect(() => {
    props.setChallengeValues(challengeItems);
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setChallengeItems((prevChallengeItems) => [...prevChallengeItems, name]);
    } else {
      setChallengeItems((prevChallengeItems) =>
        prevChallengeItems.filter((item) => item !== name)
      );
    }
  };
  return (
    <Col>
      <Form.Check
        inline
        label="Skincare Concerns"
        name="skincare concerns"
        type="checkbox"
        checked={challengeItems.includes("skincare concerns")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Personalized Solutions"
        name="personalized solutions"
        type="checkbox"
        checked={challengeItems.includes("personalized solutions")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Clean and Natural Ingredients"
        name="clean and natural ingredients"
        type="checkbox"
        checked={challengeItems.includes("clean and natural ingredients")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Ethical Sourcing and Sustainability"
        name="ethical sourcing and sustainability"
        type="checkbox"
        checked={challengeItems.includes("ethical sourcing and sustainability")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Makeup Application and Techniques"
        name="makeup application and techniques"
        type="checkbox"
        checked={challengeItems.includes("makeup application and techniques")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Long-Lasting and Transfer-Proof Formulas"
        name="long-lasting and transfer-proof formulas"
        type="checkbox"
        checked={challengeItems.includes(
          "long-lasting and transfer-proof formulas"
        )}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Accessibility and Inclusivity"
        name="accessibility and inclusivity"
        type="checkbox"
        checked={challengeItems.includes("accessibility and inclusivity")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Packaging and Portability"
        name="packaging and portability"
        type="checkbox"
        checked={challengeItems.includes("packaging and portability")}
        onChange={handleCheckboxChange}
      />
    </Col>
  );
}
