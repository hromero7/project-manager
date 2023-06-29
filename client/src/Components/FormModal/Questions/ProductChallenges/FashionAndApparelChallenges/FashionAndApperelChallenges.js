import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function FashionAndApperelChallenges(props) {
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
        label="Fit and Sizing"
        name="fit and sizing"
        type="checkbox"
        checked={challengeItems.includes("fit and sizing")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Comfort"
        name="comfort"
        type="checkbox"
        checked={challengeItems.includes("comfort")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Style Versatility"
        name="style versatility"
        type="checkbox"
        checked={challengeItems.includes("style versatility")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Quality and Durability"
        name="quality and durability"
        type="checkbox"
        checked={challengeItems.includes("quality and durability")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Sustainability"
        name="sustainability"
        type="checkbox"
        checked={challengeItems.includes("sustainability")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Unique Style and Individuality"
        name="unique style and individuality"
        type="checkbox"
        checked={challengeItems.includes("unique style and individuality")}
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
        label="Online Shopping Experience"
        name="online shopping experience"
        type="checkbox"
        checked={challengeItems.includes("online shopping experience")}
        onChange={handleCheckboxChange}
      />
    </Col>
  );
}
