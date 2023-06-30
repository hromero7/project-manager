import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function ToysAndGames(props) {
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
        label="Educational Value"
        name="educational value"
        type="checkbox"
        checked={challengeItems.includes("educational value")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Age Appropriateness"
        name="age appropriateness"
        type="checkbox"
        checked={challengeItems.includes("age appropriateness")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Engagement and Entertainment"
        name="engagement and entertainment"
        type="checkbox"
        checked={challengeItems.includes("engagement and entertainment")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Durability and Safety"
        name="durability and safety"
        type="checkbox"
        checked={challengeItems.includes("durability and safety")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Social Interaction"
        name="social interaction"
        type="checkbox"
        checked={challengeItems.includes("social interaction")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Screen-Free Play"
        name="screen-free play"
        type="checkbox"
        checked={challengeItems.includes("screen-free play")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Storage and Organization"
        name="storage and organization"
        type="checkbox"
        checked={challengeItems.includes("storage and organization")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Inclusivity and Diversity"
        name="inclusivity and diversity"
        type="checkbox"
        checked={challengeItems.includes("inclusivity and diversity")}
        onChange={handleCheckboxChange}
      />
    </Col>
  );
}
