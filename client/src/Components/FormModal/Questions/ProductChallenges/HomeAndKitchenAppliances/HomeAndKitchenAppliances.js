import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function HomeAndKitchenAppliances(props) {
  const [challengeItems, setChallengeItems] = useState([]);
  let challenges = [
    "Efficiency and Time-Saving",
    "Space Optimization",
    "User-Friendliness",
    "Versatility",
    "Durability and Reliability",
    "Safety Features",
    "Easy Maintenance and Cleaning",
    "Connectivity and Smart Home Integration",
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
