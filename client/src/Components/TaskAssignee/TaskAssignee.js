import React, { useState } from "react";
import { Form, Dropdown, Row, Col } from "react-bootstrap";
import axios from "axios";
import TaskAPI from "../../Utils/TaskAPI";
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
        <i className="fa-solid fa-circle-plus TAButton"></i>
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
                        onChange={() => {}}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (item.isActive === false || item.isActive === "") {
                            TaskAPI.addAssignee(
                              props.projectId,
                              props.taskId,
                              item.id,
                              item.username,
                              item.email
                            ).then((res) => {
                              if (res.status === 200) {
                                item.isActive = true;
                                props.getProjectData();
                              }
                            });
                          } else if (item.isActive === true) {
                            TaskAPI.removeAssignee(
                              props.projectId,
                              props.taskId,
                              item.id
                            ).then((res) => {
                              if (res.status === 200) {
                                item.isActive = false;
                                props.getProjectData();
                              }
                            });
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
