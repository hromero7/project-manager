import React, { useState } from "react";
import { Row, Col, Dropdown, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProjectAPI from "../../Utils/ProjectAPI";
import "./MemberAdd.css";
import Promote from "../Promote/Promote/Promote";
import Demote from "../Promote/Demote/Demote";

const MemberAdd = (props) => {
  const { ID } = useParams();
  const [value, setValue] = useState("");
  const [searchList, setSearchList] = useState([
    { id: 0, username: "", email: "" },
  ]);

  const findMembers = async (e) => {
    e.preventDefault();
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
  const isPromoted = () => {
    for (let i = 0; i < props.projectData.members.length; i++) {
      for (let j = 0; j < props.projectData.promo.length; j++) {
        if (
          props.projectData.members[i].id === props.projectData.promo[j].userId
        ) {
          props.projectData.members[i].isActive = true;
        }
      }
    }
  };

  return (
    <Dropdown
      data-testid="dropdownList"
      className="memAddDD"
      autoClose="outside"
    >
      <Dropdown.Toggle
        data-testid="dropdownToggle"
        className="toggleDD"
        variant="primary"
        id="dropdown-basic"
      >
        Add members:
      </Dropdown.Toggle>
      <Dropdown.Menu key="memAddSearch" className="MDDM">
        <Dropdown.Item
          key="memAddSearchItem0"
          id="memAddSearch"
          className="MDDI"
        >
          <Dropdown.Header>Add members:</Dropdown.Header>
          <Form className="inputForm">
            <Form.Control
              data-testid="searchForm"
              type="text"
              autoFocus
              className="mx-3 my-2 w-auto"
              placeholder="Search by username"
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                findMembers(e);
              }}
              onClick={(e) => {
                e.preventDefault();
              }}
              onChange={(e) => {
                e.preventDefault();
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
        {searchList.map((item, index) => {
          return (
            <Dropdown.Item
              className="MDDI"
              key={`searchItem${index}`}
              data-testid={`searchItem${index}`}
              tabIndex={index}
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
        {props.projectData.members.map((member, index) => {
          isPromoted();
          console.log(`member: `, member);

          return (
            <Dropdown.Item className="MDDI" tabIndex={index} key={member._id}>
              {member.id === props.projectData.userId ? (
                <Row>
                  <Col
                    onClick={() =>
                      console.log(`props.projectData: `, props.projectData)
                    }
                  >
                    {member.username}
                  </Col>
                  <Col id="projectLeadText">Project Leader</Col>
                </Row>
              ) : (
                <Row>
                  <Col>{member.username}</Col>
                  <Col>
                    {member.isActive ? (
                      <Demote
                        props={props}
                        memberId={member.id}
                        email={member.email}
                        username={member.username}
                      />
                    ) : (
                      <Promote
                        props={props}
                        memberId={member.id}
                        email={member.email}
                        username={member.username}
                      />
                    )}
                  </Col>
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
