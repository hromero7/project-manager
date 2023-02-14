import React from "react";
import { Col } from "react-bootstrap";
import "./RisingBubbles.css";

export default function RisingBubbles() {
  return (
    <Col>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </Col>
  );
}
