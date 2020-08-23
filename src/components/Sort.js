import React, { Component } from "react";

import { Dropdown } from "react-bootstrap";

export default class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      by: "name",
      value: 1,
    };
  }

  onSort = async (name, value) => {
    await this.setState({
      by: name,
      value: value,
    });
    this.props.onSort(this.state.by, this.state.value);
  };

  render() {
    let { by, value } = this.state;
    return (
      <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          Sắp xếp
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            className={by === "name" && value === 1 ? "sorted" : ""}
            onClick={() => this.onSort("name", 1)}
          >
            <span className="fas fa-sort-alpha-down"></span> Tên A-Z
          </Dropdown.Item>
          <Dropdown.Item
            className={by === "name" && value === -1 ? "sorted" : ""}
            onClick={() => this.onSort("name", -1)}
          >
            <span className="fas fa-sort-alpha-up"></span> Tên Z-A
          </Dropdown.Item>
          <Dropdown.Item
            className={by === "status" && value === 1 ? "sorted" : ""}
            onClick={() => this.onSort("status", 1)}
          >
            Trạng thái - Kích Hoạt
          </Dropdown.Item>
          <Dropdown.Item
            className={by === "status" && value === -1 ? "sorted" : ""}
            onClick={() => this.onSort("status", -1)}
          >
            Trạng thái - Ẩn
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
