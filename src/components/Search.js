import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: "",
  };

  render() {
    return (
      <div id="search">
        <input type="text" placeholder="Type in Your City Name" name="city"></input>
        <button type="search">FIND WEATHER
        </button>
      </div>
    );
  }
}
export default Search;
