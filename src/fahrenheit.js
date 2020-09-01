import React, { Component } from "react";
class Fahrenheit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <label>Enter the number in Fahrenheit:</label>
        <input
          type="text"
          name="f"
          value={this.props.d}
          onChange={this.props.onchanged}
        />
      </div>
    );
  }
}

export default Fahrenheit;
