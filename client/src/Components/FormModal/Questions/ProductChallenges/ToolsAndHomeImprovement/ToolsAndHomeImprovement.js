import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function ToysAndGames(props) {
  const [challengeItems, setChallengeItems] = useState([]);
  let challenges = [
    "Quality and Durability",
    "Efficiency and Time-Saving",
    "Versatility and Multi-functionality",
    "Safety and User-Friendliness",
    "Accessibility and Compatibility",
    "Educational Resources and Support",
    "Storage and Organization",
    "Affordability and Value",
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
