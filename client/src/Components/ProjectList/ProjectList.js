import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import "./ProjectList.css";

import axios from "axios";

export default function Projectlist() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [dbItems, setDbItems] = useState();
  const [getData, setGetData] = useState(false);
  const [alertState, setAlertState] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    if (auth.userId === undefined) {
      axios
        .get(`/api/project/${auth.user._id}`)
        .then((res) => {
          console.log("res ", res);
          setDbItems(res.data);
          setGetData(true);
        })
        .catch((err) => {
          console.log("error", err);
          setGetData(false);
        });
    } else {
      axios
        .get(`/api/project/${auth.userId}`)
        .then((res) => {
          console.log("res ", res);
          setDbItems(res.data);
          setGetData(true);
        })
        .catch((err) => {
          console.log("error", err);
          setGetData(false);
        });
    }
  };

  const projectAdd = (e) => {
    axios
      .post(`/api/project/create/`, { title: projectTitle })
      .then((res) => {
        axios
          .get(`/api/project/${auth.userId}`)
          .then((res) => {
            setDbItems(res.data);
            setGetData(true);
          })
          .catch((err) => {
            console.log("error", err);
            setGetData(false);
          });
      })
      .catch((err) => console.log(err));
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &nbsp;
      <i class="fa-sharp fa-solid fa-plus"></i>
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, className, "aria-labelledby": labeledBy }, ref) => {
      return (
        <div ref={ref} className={className} aria-labelledby={labeledBy}>
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="New project title:"
            onChange={(e) => setProjectTitle(e.target.value)}
            value={projectTitle}
          />
          <ul className="list-unstyled">{React.Children.toArray(children)}</ul>
        </div>
      );
    }
  );

  const OptionToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      style={{ cursor: "pointer" }}
    >
      {children}
      <i class="fa-sharp fa-solid fa-fire "></i>
    </a>
  ));

  const OptionMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col
              onClick={() => {
                getTasks();
              }}
            >
              <div>Hello {auth.user.username}!</div>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                >
                  Add Project
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu}>
                  <Dropdown.Item eventKey="1">
                    <Button
                      onClick={(e) => {
                        projectAdd();
                      }}
                    >
                      Submit
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            {getData ? (
              dbItems.map((item) => (
                <Col key={item._id}>
                  <Card
                    style={{
                      width: "18rem",
                      height: "200px",
                      margin: "15px",
                    }}
                    key={item._id}
                  >
                    <Card.Body
                      onClick={() => {
                        axios
                          .get(`/api/project/p/${item._id}`)
                          .then((res) => {
                            navigate(`/project/${res.data._id}`);
                          })
                          .catch((err) => {
                            console.log("err: ", err);
                          });
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item._id.slice(-5)}</Card.Text>
                    </Card.Body>

                    <Card.Footer>
                      <Dropdown align="end" className="dropdown">
                        <Dropdown.Toggle
                          as={OptionToggle}
                          id="dropdown-custom-components"
                        ></Dropdown.Toggle>

                        <Dropdown.Menu as={OptionMenu}>
                          <Dropdown.Item
                            eventKey="1"
                            onClick={(e) => {
                              axios
                                .delete(`/api/project/delete/`, {
                                  params: {
                                    project_id: item._id,
                                    user: auth.userId,
                                  },
                                })
                                .then((res) => {
                                  axios
                                    .get(`/api/project/${auth.user._Id}`)
                                    .then((res) => {
                                      setDbItems(res.data);
                                      setGetData(true);
                                    })
                                    .catch((err) => {
                                      console.log("error", err);
                                      setGetData(false);
                                    });
                                })
                                .catch((err) => console.log(err));
                            }}
                          >
                            Delete Project
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Card.Footer>
                  </Card>
                </Col>
              ))
            ) : (
              <div>Loading</div>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
