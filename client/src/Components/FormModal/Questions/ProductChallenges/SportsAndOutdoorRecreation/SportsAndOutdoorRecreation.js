import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function SportsAndOutdoorRecreation(props) {
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
        label="Performance Enhancement"
        name="performance enhancement"
        type="checkbox"
        checked={challengeItems.includes("performance enhancement")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Injury Prevention and Safety"
        name="injury prevention and safety"
        type="checkbox"
        checked={challengeItems.includes("injury prevention and safety")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Comfort and Ergonomics"
        name="comfort and ergonomics"
        type="checkbox"
        checked={challengeItems.includes("comfort and ergonomics")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Durability and Weather Resistance"
        name="durability and weather resistance"
        type="checkbox"
        checked={challengeItems.includes("durability and weather resistance")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Portability and Convenience"
        name="portability and convenience"
        type="checkbox"
        checked={challengeItems.includes("portability and convenience")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Versatility and Adaptability"
        name="versatility and adaptability"
        type="checkbox"
        checked={challengeItems.includes("versatility and adaptability")}
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
        label="Environmental Sustainability"
        name="environmental sustainability"
        type="checkbox"
        checked={challengeItems.includes("environmental sustainability")}
        onChange={handleCheckboxChange}
      />
    </Col>
  );
}
