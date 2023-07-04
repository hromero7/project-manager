import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function FoodAndBeverages(props) {
  const [challengeItems, setChallengeItems] = useState([]);
  let challenges = [
    "Quality and Freshness",
    "Dietary Restrictions and Allergies",
    "Convenience and Time-Saving",
    "Health and Nutrition",
    "Sustainability and Ethical Practices",
    "Authenticity and Culinary Experience",
    "Affordability",
    "Education and Transparency",
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
