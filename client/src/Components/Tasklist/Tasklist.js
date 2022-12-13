import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Dropdown,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";

export default function Tasklist() {
  const auth = useContext(AuthContext);
  const [dbItems, setDbItems] = useState();
  const [getData, setGetData] = useState(false);
  const [btnState, setBtnState] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
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
  };

  const getUserInfo = () => {};

  const projectAdd = (e) => {
    console.log("auth: ", auth);
    axios
      .post(`/api/project/create/`, { title: projectTitle })
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((err) => console.log(err));
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
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

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col
              onClick={() => {
                console.log("dbItems onclick name", dbItems);
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
                <Col>
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
                        console.log("item: ", item._id);
                      }}
                    >
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item._id.slice(-5)}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button>. . .</Button>
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
