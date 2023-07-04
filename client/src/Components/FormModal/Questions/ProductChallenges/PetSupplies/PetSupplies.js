import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function PetSupplies(props) {
  const [challengeItems, setChallengeItems] = useState([]);
  let challenges = [
    "Health and Nutrition",
    "Safety and Security",
    "Comfort and Well-being",
    "Grooming and Hygiene",
    "Training and Behavior",
    "Pet Travel and Outdoor Activities",
    "Pet Identification and Tracking",
    "Variety and Specialty Products",
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
