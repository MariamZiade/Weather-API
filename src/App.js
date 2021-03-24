import React, { Component } from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "Mariam and Omar"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        {/* <SayHi />
        <SayHello color="black" name={this.state.name} /> */}
        <Search handleInput={this.handleInputChange} />
      </div>
    );
  }
}

export default App;
