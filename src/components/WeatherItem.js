import React, { Component } from "react";
import { render } from "react-dom";

export default class WeatherItem extends Component {
  render() {
    return (
      <div className="wrapper">
        <img
          className="img"
          src="http://placekitten.com/200/300"
          alt="kittens"
        />
      </div>
    );
  }
}
export class SayHello extends Component {
  render() {
    return (
      <div className="wrapper">
      <img
        className="img"
        src="http://placekitten.com/200/300"
        alt="kittens"
      />
    </div>
      // <div style={{ color: this.props.color, backgroundColor: "yellow" }}>
      //   Hello {this.props.name}
      // </div>
    );
  }
}
