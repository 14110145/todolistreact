import React, { Component } from "react";

import { Button, Badge } from "react-bootstrap";

export default class TaskItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>
          <h5>
            <Badge variant="info">Kích Hoạt</Badge>
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
