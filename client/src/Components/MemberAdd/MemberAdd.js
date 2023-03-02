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
                  ProjectAPI.findMember(ID, e.target.value)
                    .then((res) => {
                      setSearchList(res.data);
                    })
                    .catch((err) => console.log("err: ", err));

                  // axios
                  //   .get(`/api/user/finduser/${e.target.value}`)
                  //   .then((res) => {
                  //     setSearchList(res.data);
                  //   })
                  //   .catch((err) => console.log("err: ", err));
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
                axios
                  .put(`/api/project/add_member/${ID}`, {
                    username: item.username,
                    userId: item._id,
                    email: item.email,
                  })
                  .then(() => {
                    props.getProjectData();
                  })
                  .catch((err) => {
                    console.log("err: ", err);
                  });
              }}
            >
              {item.firstName}
            </Dropdown.Item>
          );
        })}
        <Dropdown.Divider />
        <Dropdown.Header>Members:</Dropdown.Header>
        {props.projectData.members.map((member) => {
          console.log(`props: `, props);
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
                        axios
                          .delete(
                            `/api/project/delete_member/${props.projectId}`,
                            {
                              data: {
                                userId: member.id,
                                username: member.username,
                                docId: member._id,
                                projectId: props.projectId,
                                email: member.email,
                              },
                            }
                          )
                          .then((res) => {
                            // console.log("res.data: ", res.data);
                            props.getProjectData();
                          })
                          .catch((err) => {
                            console.log("err: ", err);
                          });
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
