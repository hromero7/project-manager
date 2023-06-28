import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";

export default function UniqueFeatures(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>
          What are the unique features or benefits of your product?
        </Form.Label>
        <Form.Check
          inline
          label="Performance"
          name="performance"
          type="checkbox"
          checked={props.uniqueFeatures.performance}
          onChange={props.handleCheck}
        />
        <Form.Check
          inline
          label="Design"
          name="design"
          type="checkbox"
          checked={props.uniqueFeatures.design}
          onChange={props.handleCheck}
        />
        <Form.Check
          inline
          label="Functionality"
          name="functionality"
          checked={props.uniqueFeatures.functionality}
          type="checkbox"
          onChange={props.handleCheck}
        />
        <Form.Check
          inline
          label="Quality and Durability"
          name="qualityAndDurability"
          checked={props.uniqueFeatures.qualityAndDurability}
          type="checkbox"
          onChange={props.handleCheck}
        />
        <Form.Check
          inline
          label="Innovation"
          name="innovation"
          checked={props.uniqueFeatures.innovation}
          type="checkbox"
          onChange={props.handleCheck}
        />
        <Form.Check
          inline
          label="Eco-Friendliness"
          name="ecoFriendliness"
          checked={props.uniqueFeatures.ecoFriendliness}
          type="checkbox"
          onChange={props.handleCheck}
        />
        <Form.Check
          inline
          label="User Experience"
          name="userExperience"
          checked={props.uniqueFeatures.userExperience}
          type="checkbox"
          onChange={props.handleCheck}
        />
        <Form.Check
          inline
          label="Value for Money"
          name="valueForMoney"
          checked={props.checkboxValues.valueForMoney}
          type="checkbox"
          onChange={props.handleCheck}
        />
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
