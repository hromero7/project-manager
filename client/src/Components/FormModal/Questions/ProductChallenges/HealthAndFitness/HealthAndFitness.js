import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function HealthAndFitness(props) {
  const [challengeItems, setChallengeItems] = useState([]);
  let challenges = [
    "Motivation and Accountability",
    "Accessibility and Convenience",
    "Personalization",
    "Injury Prevention and Recovery",
    "Tracking and Monitoring",
    "Education and Guidance",
    "Stress Reduction and Mental Well-being",
    "Sustainability and Eco-Friendliness",
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
