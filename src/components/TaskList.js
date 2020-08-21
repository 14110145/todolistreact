import React, { Component } from "react";

import { Form, InputGroup, FormControl, Table } from "react-bootstrap";
import TaskItem from "./TaskItem";

export default class TaskList extends Component {
  onUpdateStatusChild = (id) => {
    this.props.onUpdateStatus(id);
  };

  render() {
    let { tasks } = this.props;
    let eleTasks = tasks.map((task, index) => {
      return (
        <TaskItem
          key={task.id}
          index={index}
          task={task}
          onUpdateStatusChild={this.onUpdateStatusChild}
          onDelete={this.props.onDelete}
          onUpdate={this.props.onUpdate}
        ></TaskItem>
      );
    });
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
          {eleTasks}
        </tbody>
      </Table>
    );
  }
}
