import React, { useState } from "react";
import { Row, Col, Dropdown, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MemberAdd(props) {
  const { ID } = useParams();
  const [value, setValue] = useState();
  const [getSearchData, setGetSearchData] = useState();
  const [searchList, setSearchList] = useState([]);

  return (
    <Dropdown autoClose="outside">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Add members:
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
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
                  setGetSearchData(false);
                } else {
                  axios
                    .get(`/api/user/finduser/${e.target.value}`)
                    .then((res) => {
                      setSearchList(res.data);
                      setGetSearchData(true);
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
                  .then((res) => {
                    props.getProjData();
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
          console.log("member: ", member);
          return (
            <Dropdown.Item>
              <Row>
                <Col>{member.username}</Col>
                <Col>
                  <i
                    onClick={() => {
                      axios
                        .delete(`/api/project/delete_member/${ID}`, {
                          data: {
                            userId: member.id,
                            username: member.username,
                            docId: member._id,
                          },
                        })
                        .then((res) => {
                          props.getProjData();
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
}
