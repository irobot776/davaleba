import React from "react";

class UserOutput extends React.Component {
  render() {
    if (this.props.text.length > 0 && this.props.text.length <= 50) {
      return <div className="output">{this.props.text}</div>;
    } else if (this.props.text.length > 50) {
      return <div className="output error">more than 50</div>;
    } else {
      return <div></div>;
    }
  }
}

export default UserOutput;
