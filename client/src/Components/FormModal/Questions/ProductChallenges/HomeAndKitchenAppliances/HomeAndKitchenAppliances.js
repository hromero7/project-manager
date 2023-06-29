import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function HomeAndKitchenAppliances(props) {
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
        label="Efficiency and Time-Saving"
        name="efficiency and time-saving"
        type="checkbox"
        checked={challengeItems.includes("efficiency and time-saving")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Space Optimization"
        name="space optimization"
        type="checkbox"
        checked={challengeItems.includes("space optimization")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="User-Friendliness"
        name="user-friendliness"
        type="checkbox"
        checked={challengeItems.includes("user-friendliness")}
        onChange={handleCheckboxChange}
      />

      <Form.Check
        inline
        label="Versatility"
        name="versatility"
        type="checkbox"
        checked={challengeItems.includes("versatility")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Durability and Reliability"
        name="durability and reliability"
        type="checkbox"
        checked={challengeItems.includes("durability and reliability")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Safety Features"
        name="safety features"
        type="checkbox"
        checked={challengeItems.includes("safety features")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Easy Maintenance and Cleaning"
        name="easy maintenance and dleaning"
        type="checkbox"
        checked={challengeItems.includes("easy maintenance and dleaning")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Connectivity and Smart Home Integration"
        name="connectivity and smart home integration"
        type="checkbox"
        checked={challengeItems.includes(
          "connectivity and smart home integration"
        )}
        onChange={handleCheckboxChange}
      />
    </Col>
  );
}
