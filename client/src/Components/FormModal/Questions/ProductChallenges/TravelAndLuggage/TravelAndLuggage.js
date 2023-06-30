import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function TravelAndLuggage(props) {
  const [challengeItems, setChallengeItems] = useState([]);
  let challenges = [
    "Durability and Security",
    "Size and Weight Restrictions",
    "Organization and Accessibility",
    "Maneuverability and Portability",
    "Versatility and Multi-functionality",
    "Protection and Weather Resistance",
    "Compact Storage",
    "Design and Style",
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
