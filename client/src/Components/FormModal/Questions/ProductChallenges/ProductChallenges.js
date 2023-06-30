import React from "react";
import { Col, Form } from "react-bootstrap";
import ElectronicsChallenges from "./ElectronicsChallenges/ElectronicsChallenges";
import FashionAndApperelChallenges from "./FashionAndApparelChallenges/FashionAndApperelChallenges";
import BeautyAndPersonalCare from "./BeautyAndPersonalCare/BeautyAndPersonalCare";
import HomeAndKitchenAppliances from "./HomeAndKitchenAppliances/HomeAndKitchenAppliances";
import HealthAndFitness from "./HealthAndFitness/HealthAndFitness";
import AutomotiveAndVehicleAccessories from "./AutomotiveAndVehicleAccessories/AutomotiveAndVehicleAccessories";
import FurnitureAndHomeDecor from "./FurnitureAndHomeDecor/FurnitureAndHomeDecor";
import BooksAndMedia from "./BooksAndMedia/BooksAndMedia";
import FoodAndBeverages from "./FoodAndBeverages/FoodAndBeverages";
import BabyAndKidsProducts from "./BabyAndKidsProducts/BabyAndKidsProducts";
import PetSupplies from "./PetSupplies/PetSupplies";
import OfficeSuppliesAndStationery from "./OfficeSuppliesAndStationery/OfficeSuppliesAndStationery";
import ToolsAndHomeImprovement from "./ToolsAndHomeImprovement/ToolsAndHomeImprovement";

export default function ProductChallenges(props) {
  let challengeOptions;
  console.log(`props: `, props);
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
      break;
    case "Health and Fitness":
      challengeOptions = (
        <HealthAndFitness
          challengeValues={props.challengeValues}
          setChallengeValues={props.setChallengeValues}
        />
      );
      break;
    case "Automotive and Vehicle Accessories":
      challengeOptions = (
        <AutomotiveAndVehicleAccessories
          challengeValues={props.challengeValues}
          setChallengeValues={props.setChallengeValues}
        />
      );
      break;
    case "Furniture and Home Decor":
      challengeOptions = (
        <FurnitureAndHomeDecor
          challengeValues={props.challengeValues}
          setChallengeValues={props.setChallengeValues}
        />
      );
      break;
    case "Books and Media":
      challengeOptions = (
        <BooksAndMedia
          challengeValues={props.challengeValues}
          setChallengeValues={props.setChallengeValues}
        />
      );
      break;
    case "Food and Beverages":
      challengeOptions = (
        <FoodAndBeverages
          challengeValues={props.challengeValues}
          setChallengeValues={props.setChallengeValues}
        />
      );
      break;
    case "Baby and Kids Products":
      challengeOptions = (
        <BabyAndKidsProducts
          challengeValues={props.challengeValues}
          setChallengeValues={props.setChallengeValues}
        />
      );
      break;
    case "Pet Supplies":
      challengeOptions = (
        <PetSupplies
          challengeValues={props.challengeValues}
          setChallengeValues={props.setChallengeValues}
        />
      );
      break;
    case "Office Supplies and Stationery":
      challengeOptions = (
        <OfficeSuppliesAndStationery
          challengeValues={props.challengeValues}
          setChallengeValues={props.setChallengeValues}
        />
      );
      break;
    case "Tools and Home Improvement":
      challengeOptions = (
        <ToolsAndHomeImprovement
          challengeValues={props.challengeValues}
          setChallengeValues={props.setChallengeValues}
        />
      );
      break;
    case "Travel and Luggage":
      challengeOptions = "";
      break;
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
