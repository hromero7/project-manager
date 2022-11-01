import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

export default function Tasklist() {
  return (
    <Container>
      <Row>
        <Col>
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
              {/* this information is a placeholder. a loop will create each item with its respective classnames */}
              <tr>
                <td>1</td>
                <td>
                  The task here is to dynamically assign numbers to this table.
                </td>
                <td>ASAP</td>
                <td>11/1/22</td>
                <td>Marc</td>
                <td>Important</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
