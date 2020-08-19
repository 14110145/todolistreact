import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";

export default class TaskForm extends Component {
  render() {
    return (
      <Card>
        <Card.Header>
          <span>Thêm Công Việc</span>
          <span>
            <i className="fas fa-times-circle"></i>
          </span>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Tên</Form.Label>
              <Form.Control type="email" placeholder="Tên công việc" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Trạng thái</Form.Label>
              <Form.Control as="select" custom>
                <option>Kích Hoạt</option>
                <option>Ẩn</option>
              </Form.Control>
            </Form.Group>
            <Button variant="info" type="submit">
              Lưu Lại
            </Button>{" "}
            <Button variant="danger" type="submit">
              Hủy Bỏ
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
