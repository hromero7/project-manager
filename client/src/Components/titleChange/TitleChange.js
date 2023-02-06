import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import ProjectAPI from "../../Utils/ProjectAPI";
import "./TitleChange.css";

export default function TitleChange(props) {
  const [titleText, setTitleText] = useState();

  const submitTitleChange = async () => {
    const titleUpdate = await ProjectAPI.updateProjTitle(
      props.projectData.id,
      titleText
    );
    props.getProjData();
    console.log(`titleUpdate: `, titleUpdate);
  };

  return (
    <Col className="projTitleCont">
      <Form id="titleCh">
        <Form.Control
          className="projTitleForm"
          type="text"
          placeholder={props.projectData.title}
          onChange={(e) => {
            setTitleText(e.target.value);
          }}
          autoFocus
        />
      </Form>
      <i
        onClick={() => {
          props.setTitleChange((titleChange) => !titleChange);
          submitTitleChange();
        }}
        className="fa-solid fa-check"
      ></i>
    </Col>
  );
}
