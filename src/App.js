import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RanDomString from "randomstring";

import TaskForm from "./components/TaskForm.js";
import Control from "./components/Control.js";
import TaskList from "./components/TaskList.js";

import { Container, Row, Col, Button } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      let Tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: Tasks,
      });
    }
  }

  onGenerate = () => {
    let Tasks = [
      {
        id: RanDomString.generate(),
        name: "Học lập trình",
        status: true,
      },
      {
        id: RanDomString.generate(),
        name: "Xem phim",
        status: false,
      },
      {
        id: RanDomString.generate(),
        name: "Đi ngủ",
        status: true,
      },
    ];
    console.log(Tasks);
    this.setState({
      tasks: Tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(Tasks));
  };

  render() {
    let { tasks } = this.state;
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
                    <span className="far fa-calendar-plus"> Thêm công việc </span>
                  </Button>
                  <Button className="btn-add ml-2" variant="danger" onClick={this.onGenerate}>
                    Generate
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
                  <TaskList tasks={tasks}></TaskList>
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
