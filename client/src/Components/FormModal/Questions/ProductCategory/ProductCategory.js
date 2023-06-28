import React from "react";
import { Col, Form, Dropdown } from "react-bootstrap";

export default function ProductCategory(props) {
  return (
    <Col>
      <Form.Group className="mb-3" controlId="formTaskTitle">
        <Form.Label>What category does your product belong to?</Form.Label>
        <Dropdown>
          <Dropdown.Toggle variant="success">
            {props.categorySelection}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => props.handleCategorySelection("Electronics")}
            >
              Electronics(e.g., smartphones, laptops, headphones, cameras)
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                props.handleCategorySelection("Fashion and Apparel")
              }
            >
              Fashion and Apparel (e.g., clothing, footwear, accessories)
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                props.handleCategorySelection("Beauty and Personal Care")
              }
            >
              Beauty and Personal Care (e.g., skincare, makeup, haircare,
              fragrances)
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                props.handleCategorySelection("Home and Kitchen Appliances")
              }
            >
              Home and Kitchen Appliances (e.g., refrigerators, washing
              machines, blenders, cookware)
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                props.handleCategorySelection("Health and Fitness")
              }
            >
              Health and Fitness (e.g., fitness equipment, vitamins and
              supplements, wearable devices)
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => props.handleCategorySelection("Toys and Games")}
            >
              Toys and Games
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                props.handleCategorySelection("Sports and Outdoor Recreation")
              }
            >
              Sports and Outdoor Recreation (e.g., camping gear, sports
              equipment)
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                props.handleCategorySelection(
                  "Automotive and Vehicle Accessories"
                )
              }
            >
              Automotive and Vehicle Accessories
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                props.handleCategorySelection("Furniture and Home Decor")
              }
            >
              Furniture and Home Decor
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => props.handleCategorySelection("Books and Media")}
            >
              Books and Media (e.g., novels, non-fiction, movies, music)
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                props.handleCategorySelection("Food and Beverages")
              }
            >
              Food and Beverages
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                props.handleCategorySelection("Baby and Kids Products")
              }
            >
              Baby and Kids Products
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => props.handleCategorySelection("Pet Supplies")}
            >
              Pet Supplies
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                props.handleCategorySelection("Office Supplies and Stationery")
              }
            >
              Office Supplies and Stationery
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                props.handleCategorySelection("Tools and Home Improvement")
              }
            >
              Tools and Home Improvement
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                props.handleCategorySelection("Travel and Luggage")
              }
            >
              Travel and Luggage
            </Dropdown.Item>
            <Dropdown.Item>
              <Form.Group className="mb-3" controlId="formTaskTitle">
                <Form.Label>Other:</Form.Label>
                <Form.Control
                  name="other"
                  value={props.productValues.other}
                  onChange={props.handleFormData}
                  autoComplete="off"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a response.
                </Form.Control.Feedback>
              </Form.Group>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Form.Control.Feedback type="invalid">
          Please provide a response.
        </Form.Control.Feedback>
      </Form.Group>
    </Col>
  );
}
