import React from "react";
import UserOutput from "./UserOutput";

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    this.setState({ text: this.state.value });
  }

  render() {
    return (
      <div className="input">
        <div className="ui  action input">
          <input
            onChange={this.handleChange}
            type="value"
            placeholder="Search..."
            value={this.state.value}
          />
          <div className="ui button" onClick={this.handleSubmit}>
            Write!
          </div>
        </div>
        <UserOutput text={this.state.text} />
      </div>
    );
  }
}

export default UserInput;
