import React from "react";
import { Col } from "react-bootstrap";
import "./RisingBubbles.css";

export default function RisingBubbles() {
  return (
    <Col className="area">
      <ul className="circles">
        <li className="bubble"></li>
        <li className="bubble"></li>
        <li className="bubble"></li>
        <li className="bubble"></li>
        <li className="bubble"></li>
        <li className="bubble"></li>
        <li className="bubble"></li>
        <li className="bubble"></li>
        <li className="bubble"></li>
        <li className="bubble"></li>
      </ul>
    </Col>
  );
}
