import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";

export default function ElectronicsChallenges(props) {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setCheckedItems((prevCheckedItems) => [...prevCheckedItems, name]);
    } else {
      setCheckedItems((prevCheckedItems) =>
        prevCheckedItems.filter((item) => item !== name)
      );
    }
    console.log(`checkedItems: `, checkedItems);
  };

  return (
    <Col>
      <Form.Check
        inline
        label="Connectivity"
        name="connectivity"
        type="checkbox"
        checked={checkedItems.includes("connectivity")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Battery life"
        name="batteryLife"
        type="checkbox"
        checked={checkedItems.includes("batteryLife")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="User Interface"
        name="userInterface"
        type="checkbox"
        checked={checkedItems.includes("userInterface")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Performance and Speed"
        name="performance"
        type="checkbox"
        checked={checkedItems.includes("performance")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Compatibility"
        name="compatibility"
        type="checkbox"
        checked={checkedItems.includes("compatibility")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Durability"
        name="durability"
        type="checkbox"
        checked={checkedItems.includes("durability")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Data Security"
        name="datasecurity"
        type="checkbox"
        checked={checkedItems.includes("datasecurity")}
        onChange={handleCheckboxChange}
      />
      <Form.Check
        inline
        label="Environmental Impact"
        name="environmentalImpact"
        type="checkbox"
        checked={checkedItems.includes("environmentalImpact")}
        onChange={handleCheckboxChange}
      />
    </Col>
  );
}
