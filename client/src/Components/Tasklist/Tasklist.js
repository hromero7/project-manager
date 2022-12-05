import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Dropdown,
  Form,
  Button,
} from "react-bootstrap";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";

export default function Tasklist() {
  const auth = useContext(AuthContext);
  const [dbItems, setDbItems] = useState();
  const [getData, setGetData] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  // console.log("auth: ", auth);

  useEffect(() => {
    // getTasks();
  }, []);

  const getTasks = () => {
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
  };

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
            {/* <Col></Col> */}
            <Col>
              <div>Hello {auth.user.username}!</div>
            </Col>
            <Col>
              <Button
                onClick={() => {
                  axios
                    .get(`/api/project/${auth.user._id}`)
                    .then((res) => {
                      console.log("res ", res);
                      // setDbItems(res.data);
                      // setGetData(true);
                    })
                    .catch((err) => {
                      console.log("error", err);
                      setGetData(false);
                    });
                }}
              >
                get list
              </Button>
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
          <Table striped bordered hover>
            <thead>
              <tr className="titleRow">
                <th className="taskNumber">#</th>
                <th className="taskColumn">Task:</th>
                <th className="dueTime">Due:</th>
                <th className="assignedTimeColumn">Assigned at: </th>
                <th className="assignedByColumn">Assigned by: </th>
                <th className="priorityLevel">Priority Level</th>
              </tr>
            </thead>
            <tbody>
              {getData ? (
                dbItems.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id.slice(-5)}</td>
                    <td>{item.task}</td>
                    <td>{item.due}</td>
                    <td>{item.assignedAt}</td>
                    <td>{item.assignedBy}</td>
                    <td>{item.priorityLevel}</td>
                  </tr>
                ))
              ) : (
                <div>Loading</div>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
