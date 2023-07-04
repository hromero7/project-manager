import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function ToysAndGames(props) {
  const [challengeItems, setChallengeItems] = useState([]);
  let challenges = [
    "Educational Value",
    "Age Appropriateness",
    "Engagement and Entertainment",
    "Durability and Safety",
    "Social Interaction",
    "Screen-Free Play",
    "Storage and Organization",
    "Inclusivity and Diversity",
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
