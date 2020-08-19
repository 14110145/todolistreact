import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  InputGroup,
  FormControl,
  Dropdown,
  Table,
  Badge,
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <div className="title-center mb-50 mt-10">
            <h1>Quản Lý Công Việc</h1>
          </div>
          <Row>
            <Col sm={4}>
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
            </Col>
            <Col sm={8}>
              <Row>
                <Col sm={12}>
                  <Button className="btn-add" variant="info">
                    {/* <i className="far fa-calendar-plus"></i> */}
                    <span className="far fa-calendar-plus"> Thêm công việc </span>
                  </Button>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={6}>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Nhập từ khóa..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary">
                        <i className="fas fa-search"></i>
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Col>
                <Col sm={6}>
                  <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                      Sắp xếp
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
              <br />
              <Row>
                <Col sm={12}>
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
                            <span className="far fa-trash-alt">Xóa</span>
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
