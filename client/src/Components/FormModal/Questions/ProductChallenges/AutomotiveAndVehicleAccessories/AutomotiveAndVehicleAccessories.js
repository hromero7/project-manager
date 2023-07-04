import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function AutomotiveAndVehicleAccessories(props) {
  const [challengeItems, setChallengeItems] = useState([]);
  let challenges = [
    "Safety and Security",
    "Convenience and Comfort",
    "Versatility and Adaptability",
    "Organization and Storage",
    "Connectivity and Technology integration",
    "Energy Efficiency and Sustainability",
    "Maintenance and Care",
    "Personalization and Style",
  ];

  useEffect(() => {
    props.setChallengeValues(challengeItems);
  }, [challengeItems, props]);

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
