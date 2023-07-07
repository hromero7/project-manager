import React, { useState, useEffect } from "react";
import { Col, Form } from "react-bootstrap";

export default function UniqueFeatures(props) {
  const [uniqueFeature, setUniqueFeature] = useState([]);
  let feature = [
    "Performance",
    "Design",
    "Functionality",
    "Quality and Durability",
    "Innovation",
    "User Experience",
    "Value for Money",
    // "Other",
  ];

  useEffect(() => {
    props.setUniqueFeatures(uniqueFeature);
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const updatedFeatures = [...uniqueFeature];

    if (checked) {
      updatedFeatures.push(name);
    } else {
      const index = updatedFeatures.indexOf(name);
      if (index !== -1) {
        updatedFeatures.splice(index, 1);
      }
    }

    setUniqueFeature(updatedFeatures);

    props.setProductValues((prevProductValues) => ({
      ...prevProductValues,
      question3: updatedFeatures,
    }));
  };

  // const handleCheckboxChange = (event) => {
  //   const { name, checked } = event.target;

  //   if (checked) {
  //     setUniqueFeature((prevFeatureItems) => [...prevFeatureItems, name]);
  //   } else {
  //     setUniqueFeature((prevFeatureItems) =>
  //       prevFeatureItems.filter((item) => item !== name)
  //     );
  //   }

  //   props.setProductValues((prevProductValues) => ({
  //     ...prevProductValues,
  //     question3: {
  //       ...prevProductValues.question3,
  //       [name]: name,
  //     },
  //   }));
  // };

  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>
          What are the unique features or benefits of your product?
        </Form.Label>
        {feature.map((featureItem, index) => {
          return (
            <Form.Check
              inline
              key={index}
              label={featureItem}
              name={featureItem.toLowerCase()}
              type="checkbox"
              checked={props.checkboxValues[featureItem.toLowerCase()]}
              onChange={handleCheckboxChange}
            />
          );
        })}
        <Form.Check
          inline
          label="Other:"
          name="other"
          type="checkbox"
          checked={props.checkboxValues.other}
          onChange={props.handleOtherCheck}
        />
        {props.checkboxValues.other ? (
          <>
            <Form.Control
              name="otherInput"
              placeholder="Please specify"
              value={props.uniqueFeatures.otherInput || ""}
              onChange={(e) => {
                props.handleOtherForm(e);
              }}
              autoComplete="off"
            />
          </>
        ) : (
          ""
        )}

        <Form.Control.Feedback type="invalid">
          Please provide a response.
        </Form.Control.Feedback>
      </Form.Group>
    </Col>
  );
}
