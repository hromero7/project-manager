import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Dropdown, Row, Col } from "react-bootstrap";
import "./TaskAssignee.css";

const TaskAssignee = (props) => {
  const [show, setShow] = useState(false);
  const [memberList, setMemberList] = useState();

  const getMemberList = () => {
    setMemberList(
      props.projectData.members.map((v) => ({ ...v, isActive: "" }))
    );
    setShow(true);
  };

  const getActiveList = () => {
    for (let i = 0; i < memberList.length; i++) {
      for (let j = 0; j < props.assignee.length; j++) {
        if (memberList[i].id === props.assignee[j].id) {
          memberList[i].isActive = true;
          memberList[i].arrPos = j;
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
        getMemberList();
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
          {children}
        </div>
      );
    }
  );

  return (
    <Dropdown
      data-testid="taskAssigneeDropdown"
      autoClose="outside"
      className="dropdown-assignee"
    >
      <Dropdown.Toggle as={CustomUserAddToggle} id="dropdown-custom-components">
        <i title="plusButton" className="fa-solid fa-circle-plus"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu
        role="menu"
        className="assignTaskDDM"
        align={{ lg: "start" }}
        as={taskMenu}
      >
        <Dropdown.Header>Assign tasks:</Dropdown.Header>
        {show
          ? memberList.map((item, index) => {
              getActiveList();
              return (
                <Dropdown.Item className="assignTaskNames" key={index}>
                  <Row>
                    <Col className="switchContainer">
                      <Form.Check
                        data-testid={`checkbox${item.arrPos}`}
                        onChange={(e) => {}}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (item.isActive === false || item.isActive === "") {
                            axios
                              .put(
                                `/api/task/add_assignee/${props.projectId}/${props.taskId}`,
                                {
                                  id: item.id,
                                  username: item.username,
                                  email: item.email,
                                }
                              )
                              .then(() => {
                                item.isActive = true;
                                props.getProjectData();
                              })
                              .catch((err) => console.log("err: ", err));
                          } else if (item.isActive === true) {
                            axios
                              .put(
                                `/api/task/remove_assignee/${props.projectId}/${props.taskId}/${item.id}`,
                                { id: item.id, username: item.username }
                              )
                              .then(() => {
                                item.isActive = false;
                                props.getProjectData();
                                // getActiveList();
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
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default TaskAssignee;
