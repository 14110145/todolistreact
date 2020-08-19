import React, { Component } from "react";

import { Form, InputGroup, FormControl, Table } from "react-bootstrap";
import TaskItem from "./TaskItem";

export default class TaskList extends Component {
  render() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Trạng Thái</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <InputGroup>
                <FormControl aria-describedby="basic-addon1" />
              </InputGroup>
            </td>
            <td>
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  {/* <Form.Label>Custom select</Form.Label> */}
                  <Form.Control as="select" custom>
                    <option>Tất cả</option>
                    <option>Ẩn</option>
                    <option>Kích Hoạt</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </td>
            <td></td>
          </tr>
          <TaskItem></TaskItem>
        </tbody>
      </Table>
    );
  }
}
