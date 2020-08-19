import React, { Component } from "react";

import { Button, Badge } from "react-bootstrap";

export default class TaskItem extends Component {
  render() {
    let { task, index } = this.props;
    return (
      <tr>
        <td>{index}</td>
        <td>{task.name}</td>
        <td>
          <h5>
            <Badge variant="info">{task.status ? "Kích Hoạt" : "Ẩn"}</Badge>
          </h5>
        </td>
        <td>
          <Button variant="info">
            <span className="far fa-edit"> Sửa</span>
          </Button>{" "}
          <Button variant="danger">
            <span className="far fa-trash-alt"> Xóa </span>
          </Button>
        </td>
      </tr>
    );
  }
}
