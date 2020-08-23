import React, { Component } from "react";

import { Form, InputGroup, FormControl, Table } from "react-bootstrap";
import TaskItem from "./TaskItem";

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      filterStatus: -1, //-1 All, 1 active, 0 inactive
    };
  }
  onUpdateStatusChild = (id) => {
    this.props.onUpdateStatus(id);
  };

  // Filter
  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value,
    });
  };

  render() {
    let { tasks } = this.props;
    let { filterName, filterStatus } = this.state;
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
      <Table striped bordered hover size="sm" style={{ textAlign: "center" }}>
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
                <FormControl
                  aria-describedby="basic-addon1"
                  name="filterName"
                  value={filterName}
                  onChange={this.onChange}
                />
              </InputGroup>
            </td>
            <td>
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control
                    as="select"
                    name="filterStatus"
                    value={filterStatus}
                    onChange={this.onChange}
                    custom
                  >
                    <option value={-1}>Tất cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích Hoạt</option>
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
