import { React, useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

export default function Tasklist() {
  const taskArr = [];
  const [dbItems, setDbItems] = useState();
  const [getData, setGetData] = useState(false);
  
  useEffect(() => {
    axios
      .get(`/api/alert/`)
      .then((res) => {
        // console.log("res.data: ", res.data);
        setDbItems(res.data);
        setGetData(true);
      })
      .catch((err) => {
        console.log("error", err);
        setGetData(false);
      });
  });

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col></Col>
            <div>
              you are logged in, welcome!
            </div>
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
