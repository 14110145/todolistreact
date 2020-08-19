import React, { Component } from "react";

import { Button, InputGroup, FormControl } from "react-bootstrap";

export default class Search extends Component {
  render() {
    return (
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
    );
  }
}
