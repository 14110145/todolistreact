import React, { Component } from "react";

import { Button, InputGroup, FormControl } from "react-bootstrap";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: "",
    };
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSearch = () => {
    this.props.onSearch(this.state.keyWord);
  };

  render() {
    let { keyWord } = this.state;
    return (
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Nhập từ khóa..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          name="keyWord"
          value={keyWord}
          onChange={this.onChange}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={this.onSearch}>
            <i className="fas fa-search"></i>
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}
