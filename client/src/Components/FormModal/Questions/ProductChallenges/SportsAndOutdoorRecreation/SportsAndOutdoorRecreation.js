import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function SportsAndOutdoorRecreation(props) {
  const [challengeItems, setChallengeItems] = useState([]);
  let challenges = [
    "Performance Enhancement",
    "Injury Prevention and Safety",
    "Comfort and Ergonomics",
    "Durability and Weather Resistance",
    "Portability and Convenience",
    "Versatility and Adaptability",
    "Accessibility and Inclusivity",
    "Environmental Sustainability",
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
