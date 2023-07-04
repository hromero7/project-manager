import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function BeautyAndPersonalCare(props) {
  const [challengeItems, setChallengeItems] = useState([]);
  let challenges = [
    "Skincare Concerns",
    "Personalized Solutions",
    "Clean and Natural Ingredients",
    "Ethical Sourcing and Sustainability",
    "Makeup Application and Techniques",
    "Long-Lasting and Transfer-Proof Formulas",
    "Accessibility and Inclusivity",
    "Packaging and Portability",
  ];

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
      {challenges.map((challItem, index) => {
        return (
          <Form.Check
            inline
            key={index}
            label={challItem}
            name={challItem.toLowerCase()}
            type="checkbox"
            checked={challengeItems.includes(challItem.toLowerCase())}
            onChange={handleCheckboxChange}
          />
        );
      })}
    </Col>
  );
}
