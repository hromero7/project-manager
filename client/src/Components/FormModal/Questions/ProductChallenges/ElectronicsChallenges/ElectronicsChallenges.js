import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function ElectronicsChallenges(props) {
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
        label="Connectivity"
        name="connectivity"
        type="checkbox"
        checked={challengeItems.includes("connectivity")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Battery life"
        name="battery life"
        type="checkbox"
        checked={challengeItems.includes("battery life")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="User Interface"
        name="user interface"
        type="checkbox"
        checked={challengeItems.includes("user interface")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Performance and Speed"
        name="performance"
        type="checkbox"
        checked={challengeItems.includes("performance")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Compatibility"
        name="compatibility"
        type="checkbox"
        checked={challengeItems.includes("compatibility")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Durability"
        name="durability"
        type="checkbox"
        checked={challengeItems.includes("durability")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Data Security"
        name="data security"
        type="checkbox"
        checked={challengeItems.includes("data security")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Environmental Impact"
        name="environmental impact"
        type="checkbox"
        checked={challengeItems.includes("environmental impact")}
        onChange={handleCheckboxChange}
      />
    </Col>
  );
}
