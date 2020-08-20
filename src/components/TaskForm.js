import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";

export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_of_ten: "",
      name_of_trang_thai: true,
    };
  }
  onCloseFormChild = () => {
    return this.props.onCloseForm();
  };

  onClearForm = () => {
    this.setState({
      name_of_ten: "",
      name_of_trang_thai: false,
    });
    this.props.onCloseForm();
  };

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if (name === "name_of_trang_thai") {
      value = value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };

  onSubmitChild = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClearForm();
    this.props.onCloseForm();
  };

  render() {
    return (
      <Card>
        <Card.Header>
          <span>Thêm Công Việc</span>
          <span onClick={this.onCloseFormChild}>
            <i className="fas fa-times-circle"></i>
          </span>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={this.onSubmitChild}>
            <Form.Group>
              <Form.Label>Tên</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tên công việc"
                name="name_of_ten"
                value={this.state.name_of_ten}
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Trạng thái</Form.Label>
              <Form.Control
                as="select"
                name="name_of_trang_thai"
                value={this.state.name_of_trang_thai}
                onChange={this.onChange}
                custom
              >
                <option value={true}>Kích Hoạt</option>
                <option value={false}>Ẩn</option>
              </Form.Control>
            </Form.Group>
            <Button variant="info" type="submit">
              Lưu Lại
            </Button>{" "}
            <Button variant="danger" onClick={this.onClearForm}>
              Hủy Bỏ
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
