import React, { Component } from "react";
import "./App.css";
import Celcius from "./celcius";
import Fahrenheit from "./fahrenheit";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { celcius: "", fahrenheit: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  toCelcius = (d) => ((d - 32) * 5) / 9;
  toFahrenheit = (d) => (d * 9) / 5 + 32;
  handleChange(event) {
    const active = event.target.name;
    const value = event.target.value;
    const d = value != "" ? parseFloat(value) : 0;
    if (active != "c") {
      const converted = this.toCelcius(d);
      this.setState({
        fahrenheit: d,
        celcius: converted,
      });
    } else {
      const converted = this.toFahrenheit(d);
      this.setState({
        fahrenheit: converted,
        celcius: d,
      });
    }
  }
  render() {
    return (
      <div className="app">
        <Celcius onchanged={this.handleChange} d={this.state.celcius} />
        <Fahrenheit onchanged={this.handleChange} d={this.state.fahrenheit} />
      </div>
    );
  }
}

export default App;
