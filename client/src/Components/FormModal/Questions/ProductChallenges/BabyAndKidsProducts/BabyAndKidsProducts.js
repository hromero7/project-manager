import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function BabyAndKidsProducts(props) {
  const [challengeItems, setChallengeItems] = useState([]);
  let challenges = [
    "Safety and Security",
    "Comfort and Convenience",
    "Durability and Longevity",
    "Age-Appropriate Development",
    "Hygiene and Cleanliness",
    "Storage and Organization",
    "Portability and Travel-Friendliness",
    "Affordability",
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
      {challenges.map((challItem) => {
        return (
          <Form.Check
            inline
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
