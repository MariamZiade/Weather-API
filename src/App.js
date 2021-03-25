import React, { Component } from "react";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";
import storm from "./img/weather-icons/storm.svg";



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
    <div className="app"> {}
    <Search handleInput={this.handleInputChange} />
      <WeatherItem/>
      <img className="storm" src={storm} alt="storm icon" />
    </div>
  );
}
}

export default App;
