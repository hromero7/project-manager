import React from "react";
import { Col, Form } from "react-bootstrap";
import ElectronicsChallenges from "./ElectronicsChallenges/ElectronicsChallenges";
import FashionAndApperelChallenges from "./FashionAndApparelChallenges/FashionAndApperelChallenges";
import BeautyAndPersonalCare from "./BeautyAndPersonalCare/BeautyAndPersonalCare";
import HomeAndKitchenAppliances from "./HomeAndKitchenAppliances/HomeAndKitchenAppliances";

export default function ProductChallenges(props) {
  console.log(`props `, props);
  let challengeOptions;

  switch (props.question2) {
    case "Electronics":
      challengeOptions = (
        <ElectronicsChallenges
          challengeValues={props.challengeValues}
          setChallengeValues={props.setChallengeValues}
        />
      );
      break;
    case "Fashion and Apparel":
      challengeOptions = (
        <FashionAndApperelChallenges
          challengeValues={props.challengeValues}
          setChallengeValues={props.setChallengeValues}
        />
      );
      break;
    case "Beauty and Personal Care":
      challengeOptions = (
        <BeautyAndPersonalCare
          challengeValues={props.challengeValues}
          setChallengeValues={props.setChallengeValues}
        />
      );
      break;
    case "Home and Kitchen Appliances":
      challengeOptions = (
        <HomeAndKitchenAppliances
          challengeValues={props.challengeValues}
          setChallengeValues={props.setChallengeValues}
        />
      );
    default:
      break;
  }

  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>
          What problems or challenges does your product solve?
        </Form.Label>

        {challengeOptions}
      </Form.Group>
    </Col>
  );
}
