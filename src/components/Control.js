import React, { Component, Fragment } from "react";

import { Col } from "react-bootstrap";
import Search from "./Search.js";
import Sort from "./Sort.js";

export default class Control extends Component {
  render() {
    return (
      <Fragment>
        <Col sm={6}>
          <Search onSearch={this.props.onSearch}></Search>
        </Col>
        <Col sm={6}>
          <Sort></Sort>
        </Col>
      </Fragment>
    );
  }
}
