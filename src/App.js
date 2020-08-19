import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TaskForm from "./components/TaskForm.js";
import Control from "./components/Control.js";
import TaskList from "./components/TaskList.js";

import { Container, Row, Col, Button } from "react-bootstrap";

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
              <TaskForm></TaskForm>
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
                <Control></Control>
              </Row>
              <br />
              <Row>
                <Col sm={12}>
                  <TaskList></TaskList>
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
