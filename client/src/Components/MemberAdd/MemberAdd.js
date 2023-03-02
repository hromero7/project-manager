import React, { useState } from "react";
import { Row, Col, Dropdown, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProjectAPI from "../../Utils/ProjectAPI";
import "./MemberAdd.css";

const MemberAdd = (props) => {
  const { ID } = useParams();
  const [value, setValue] = useState();
  const [searchList, setSearchList] = useState([]);

  const findMembers = async (e) => {
    const res = await ProjectAPI.findMember(e.target.value);
    setSearchList(res);
  };

  const addMembers = async (item) => {
    const res = await ProjectAPI.addMember(ID, item);
    if (res.status === 200) {
      props.getProjectData();
    } else {
      console.log(`message: `, res.message.msgBody);
    }
  };

  const removeMembers = async (member) => {
    const res = await ProjectAPI.removeMembers(ID, member);
    if (res.status === 200) {
      props.getProjectData();
    } else {
      console.log(`message: `, res.message.msgBody);
    }
  };

  return (
    <Dropdown className="memAddDD" autoClose="outside">
      <Dropdown.Toggle
        className="toggleDD"
        variant="primary"
        id="dropdown-basic"
      >
        Add members:
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" id="memAddSearch">
          <Dropdown.Header>Add members:</Dropdown.Header>
          <Form>
            <Form.Control
              autoFocus
              className="mx-3 my-2 w-auto"
              placeholder="Search by username"
              autoComplete="off"
              onChange={(e) => {
                if (e.target.value.length <= 1) {
                  setSearchList([]);
                } else {
                  findMembers(e);
                }
                setValue(e.target.value);
              }}
              value={value}
            />
          </Form>
        </Dropdown.Item>
        {searchList.map((item) => {
          return (
            <Dropdown.Item
              onClick={() => {
                addMembers(item);
              }}
            >
              {item.firstName}
            </Dropdown.Item>
          );
        })}
        <Dropdown.Divider />
        <Dropdown.Header>Members:</Dropdown.Header>
        {props.projectData.members.map((member) => {
          return (
            <Dropdown.Item key={member._id}>
              {member.id === props.projectData.userId ? (
                <Row>
                  <Col>{member.username}</Col>
                  <Col id="projectLeadText">Project Leader</Col>
                </Row>
              ) : (
                <Row>
                  <Col>{member.username}</Col>
                  <Col>
                    <i
                      onClick={() => {
                        removeMembers(member);
                      }}
                      className="dropIcon fa-sharp fa-solid fa-xmark"
                    ></i>
                  </Col>
                </Row>
              )}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MemberAdd;
