import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function HealthAndFitness(props) {
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
        label="Motivation and Accountability"
        name="motivation and accountability"
        type="checkbox"
        checked={challengeItems.includes("motivation and accountability")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Accessibility and Convenience"
        name="accessibility and convenience"
        type="checkbox"
        checked={challengeItems.includes("accessibility and convenience")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Personalization"
        name="personalization"
        type="checkbox"
        checked={challengeItems.includes("personalization")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Injury Prevention and Recovery"
        name="injury prevention and recovery"
        type="checkbox"
        checked={challengeItems.includes("injury prevention and recovery")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Tracking and Monitoring"
        name="tracking and monitoring"
        type="checkbox"
        checked={challengeItems.includes("tracking and monitoring")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Education and Guidance"
        name="education and guidance"
        type="checkbox"
        checked={challengeItems.includes("education and guidance")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Stress Reduction and Mental Well-being"
        name="stress reduction and mental well-being"
        type="checkbox"
        checked={challengeItems.includes(
          "stress reduction and mental well-being"
        )}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Sustainability and Eco-Friendliness"
        name="sustainability and eco-friendliness"
        type="checkbox"
        checked={challengeItems.includes("sustainability and eco-friendliness")}
        onChange={handleCheckboxChange}
      />
    </Col>
  );
}
