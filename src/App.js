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
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: "",
        status: -1,
      },
      keyWord: "",
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

  //Component Btn-Them cong viec**********************
  onToggleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditing) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null,
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null,
      });
    }
  };

  // TaskForm - Props*********************************
  onCloseFormFather = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
    });
  };

  onSubmitFather = (data) => {
    let { tasks } = this.state;
    if (!data.id) {
      let task = {
        id: RanDomString.generate(),
        name: data.name_of_ten,
        status: data.name_of_trang_thai,
      };
      tasks.push(task);
    } else {
      let index = tasks.findIndex((task, index) => task.id === data.id);
      tasks[index].id = data.id;
      tasks[index].name = data.name_of_ten;
      tasks[index].status = data.name_of_trang_thai;
    }
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // TaskList - Props**********************************
  onUpdateStatusFather = (id) => {
    let { tasks } = this.state;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        tasks[index].status = !tasks[index].status;
      }
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
  };

  onDelete = (id) => {
    let { tasks } = this.state;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        tasks.splice(index, 1);
      }
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
  };

  onUpdate = async (id) => {
    let { tasks } = this.state;
    let index = tasks.findIndex((task) => task.id === id);
    await this.setState({
      taskEditing: tasks[index],
    });
    this.onShowForm();
  };

  onShowForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  };

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus);
    this.setState({
      filter: {
        name: filterName,
        status: filterStatus,
      },
    });
  };
  //Search-Control componets
  onSearch = (keyWord) => {
    this.setState({
      keyWord: keyWord,
    });
  };

  render() {
    let { tasks, isDisplayForm, taskEditing, filter, keyWord } = this.state;
    if (filter.name) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
      });
    }
    tasks = tasks.filter((task) => {
      if (filter.status === -1) {
        return task;
      } else {
        return task.status === (filter.status === 1 ? true : false);
      }
    });
    if (keyWord) {
      console.log("have key word....");
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
      });
    }
    let eleTaskForm = isDisplayForm ? (
      <TaskForm
        onCloseForm={this.onCloseFormFather}
        onSubmit={this.onSubmitFather}
        task={taskEditing}
      />
    ) : (
      ""
    );
    return (
      <div className="App">
        <Container>
          <div className="title-center mb-50 mt-10">
            <h1>Quản Lý Công Việc</h1>
          </div>
          <Row>
            <Col sm={4}>{eleTaskForm}</Col>
            <Col sm={isDisplayForm ? 8 : 12}>
              <Row>
                <Col sm={12}>
                  <Button className="btn-add" variant="info" onClick={this.onToggleForm}>
                    <span className="far fa-calendar-plus"> Thêm công việc </span>
                  </Button>
                </Col>
              </Row>
              <br />
              <Row>
                <Control onSearch={this.onSearch}></Control>
              </Row>
              <br />
              <Row>
                <Col sm={12}>
                  <TaskList
                    tasks={tasks}
                    onUpdateStatus={this.onUpdateStatusFather}
                    onDelete={this.onDelete}
                    onUpdate={this.onUpdate}
                    onFilter={this.onFilter}
                  ></TaskList>
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
