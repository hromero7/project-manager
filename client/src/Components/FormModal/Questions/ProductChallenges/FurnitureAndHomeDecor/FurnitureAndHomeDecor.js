import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function FurnitureAndHomeDecor(props) {
  const [challengeItems, setChallengeItems] = useState([]);
  let challenges = [
    "Style and Aesthetic Appeal",
    "Space Optimization",
    "Comfort and Ergonomics",
    "Quality and Durability",
    "Functionality and Practicality",
    "Easy Assembly and Installation",
    "Sustainable and Environmentally Friendly",
    "Value for Money",
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
