import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Form, Dropdown, Row, Col } from "react-bootstrap";
import TaskAPI from "../../Utils/TaskAPI";

const TaskAssignee = (props) => {
  const { ID } = useParams();
  const [show, setShow] = useState(false);
  const [memberList, setMemberList] = useState();
  const [activeList, setActiveList] = useState();
  const [toggle, setToggle] = useState(true);
  const activeArray = [];

  useEffect(() => {
    getMemberList();
    // getActiveList();
  }, []);

  const getMemberList = () => {
    axios
      .get(`/api/project/${ID}`)
      .then((res) => {
        if (res.status === 200) {
          setMemberList(res.data.members.map((v) => ({ ...v, isActive: "" })));
          setShow(true);
        }
      })
      .catch((err) => console.log("err: ", err));
  };

  const getActiveList = () => {
    for (let i = 0; i < memberList.length; i++) {
      for (let j = 0; j < props.assignee.length; j++) {
        if (memberList[i].id === props.assignee[j].id) {
          // setActiveList()
          memberList[i].isActive = true;
        }
      }
    }
  };

  const CustomUserAddToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        // getMemberList();
        console.log("memberList: ", memberList);
        getActiveList();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

  const taskMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="list-unstyled"></ul>
          {children}
        </div>
      );
    }
  );

  return (
    <Dropdown autoClose="outside">
      <Dropdown.Toggle as={CustomUserAddToggle} id="dropdown-custom-components">
        <i className="fa-solid fa-circle-plus"></i>
      </Dropdown.Toggle>
      <Dropdown.Menu as={taskMenu}>
        <Dropdown.Header>Assign tasks:</Dropdown.Header>
        {show
          ? memberList.map((item) => {
              getActiveList();
              return (
                <Dropdown.Item>
                  <Row>
                    <Col>
                      <Form.Check
                        onClick={(e) => {
                          // console.log("e.target.checked: ", e.target.checked);
                          console.log("item: ", item);
                          setToggle(!toggle);
                          if (item.isActive === false || item.isActive === "") {
                            item.isActive = true;
                            axios
                              .put(
                                `/api/task/add_assignee/${props.projectId}/${props.taskId}`,
                                { id: item.id, username: item.username }
                              )
                              .then(() => {
                                item.isActive = true;
                              })
                              .catch((err) => console.log("err: ", err));
                          } else if (item.isActive === true) {
                            item.isActive = false;
                            axios
                              .put(
                                `/api/task/remove_assignee/${props.projectId}/${props.taskId}/${item.id}`,
                                { id: item.id, username: item.username }
                              )
                              .then(() => {
                                item.isActive = true;
                              })
                              .catch((err) => console.log("err: ", err));
                          }
                        }}
                        type="switch"
                        checked={item.isActive}
                      />
                    </Col>
                    <Col>{item.username}</Col>
                  </Row>
                </Dropdown.Item>
              );
            })
          : "Loading"}
        {/* <Dropdown.Divider /> */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default TaskAssignee;
