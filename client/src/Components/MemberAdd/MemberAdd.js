import React, { useState } from "react";
import { Row, Col, Dropdown, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
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
                  axios
                    .get(`/api/user/finduser/${e.target.value}`)
                    .then((res) => {
                      setSearchList(res.data);
                    })
                    .catch((err) => console.log("err: ", err));
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
          return (
            <Dropdown.Item key={member._id}>
              <Row>
                <Col>{member.username}</Col>
                <Col>
                  <i
                    onClick={() => {
                      console.log("member: ", member);
                      console.log("props.projectId: ", props.projectId);
                      axios
                        .delete(
                          `/api/project/delete_member/${props.projectId}`,
                          {
                            data: {
                              userId: member.id,
                              username: member.username,
                              docId: member._id,
                              projectId: props.projectId,
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
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MemberAdd;
