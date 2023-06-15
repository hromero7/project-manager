import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import ProjectAPI from "../../Utils/ProjectAPI";
import "./TitleChange.css";

export default function TitleChange(props) {
  const [titleText, setTitleText] = useState(props.projectData.title);

  const submitTitleChange = async (e) => {
    e.preventDefault();
    const titleUpdate = await ProjectAPI.updateProjTitle(
      props.projectData.id,
      titleText
    );
    props.getProjData();
    props.setTitleChange((titleChange) => !titleChange);
  };

  return (
    <Col className="projTitleCont">
      <Form id="titleCh" onSubmit={submitTitleChange}>
        <Form.Control
          className="projTitleForm"
          type="text"
          placeholder={props.projectData.title}
          onChange={(e) => {
            setTitleText(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            );
          }}
          autoFocus
        />
      </Form>
      <i
        onClick={(e) => {
          submitTitleChange(e);
        }}
        className="fa-solid fa-check"
      ></i>
    </Col>
  );
}
