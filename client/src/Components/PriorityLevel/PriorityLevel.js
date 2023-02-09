import React from "react";
import { Col } from "react-bootstrap";
import TaskAPI from "../../Utils/TaskAPI";

export default function PriorityLevel(props) {
  const priorityUpdate = async (e) => {
    // console.log(`starValue: `, props, starValue);
    console.log(`e.target.id: `, e.target.id);

    if (props.taskValues._id !== undefined) {
      const pup = await TaskAPI.updatePriority(
        props.projectId,
        props.taskValues._id,
        e.target.id
      );
      console.log(`pup: `, pup);
    }
    props.getProjData();
  };

  switch (props.priority) {
    case "0":
      return (
        <Col>
          <i
            id="1"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
          <i
            id="2"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
          <i
            id="3"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
          <i
            id="4"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
          <i
            id="5"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
        </Col>
      );
    case "1":
      return (
        <Col>
          <i
            id="1"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              priorityUpdate(e);
            }}
            class="fa-solid fa-star"
          ></i>
          <i
            id="2"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
          <i
            id="3"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
          <i
            id="4"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
          <i
            id="5"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
        </Col>
      );
    case "2":
      return (
        <Col>
          <i
            id="1"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-solid fa-star"
          ></i>
          <i
            id="2"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-solid fa-star"
          ></i>
          <i
            id="3"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
          <i
            id="4"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
          <i
            id="5"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
        </Col>
      );
    case "3":
      return (
        <Col>
          <i
            id="1"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-solid fa-star"
          ></i>
          <i
            id="2"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-solid fa-star"
          ></i>
          <i
            id="3"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-solid fa-star"
          ></i>
          <i
            id="4"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
          <i
            id="5"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
        </Col>
      );
    case "4":
      return (
        <Col>
          <i
            id="1"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-solid fa-star"
          ></i>
          <i
            id="2"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-solid fa-star"
          ></i>
          <i
            id="3"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-solid fa-star"
          ></i>
          <i
            id="4"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-solid fa-star"
          ></i>
          <i
            id="5"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
        </Col>
      );
    case "5":
      return (
        <Col>
          <i
            id="1"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-solid fa-star"
          ></i>
          <i
            id="2"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-solid fa-star"
          ></i>
          <i
            id="3"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-solid fa-star"
          ></i>
          <i
            id="4"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-solid fa-star"
          ></i>
          <i
            id="5"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-solid fa-star"
          ></i>
        </Col>
      );
    default:
      return (
        <Col>
          <i
            id="1"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
          <i
            id="2"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
          <i
            id="3"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
          <i
            id="4"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
          <i
            id="5"
            onClick={(e) => {
              props.taskValues.priority = e.target.id;
              props.getProjData();
              priorityUpdate(e);
            }}
            class="fa-regular fa-star"
          ></i>
        </Col>
      );
  }
}
