import React, { Component } from "react";

import { Button, Badge } from "react-bootstrap";

export default class TaskItem extends Component {
  onUpdateStatusChil_of_2 = () => {
    this.props.onUpdateStatusChild(this.props.task.id);
  };

  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  };

  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  };

  render() {
    let { task, index } = this.props;
    return (
      <tr>
        <td>{index}</td>
        <td>{task.name}</td>
        <td>
          <h5>
            {task.status ? (
              <Badge variant="info" onClick={this.onUpdateStatusChil_of_2}>
                Kích Hoạt
              </Badge>
            ) : (
              <Badge variant="danger" onClick={this.onUpdateStatusChil_of_2}>
                Ẩn
              </Badge>
            )}
          </h5>
        </td>
        <td>
          <Button variant="info" onClick={this.onUpdate}>
            <span className="far fa-edit"> Sửa</span>
          </Button>{" "}
          <Button variant="danger" onClick={this.onDelete}>
            <span className="far fa-trash-alt"> Xóa </span>
          </Button>
        </td>
      </tr>
    );
  }
}
