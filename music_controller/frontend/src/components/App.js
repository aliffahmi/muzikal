import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='center'>
        <HomePage />
      </div>
    );
  }
}

export default App;

// Putting this component inside the div with app-container in index.html
const appDiv = document.getElementById("app");

// first parameter is how you define a component
render(<App name='app' />, appDiv);
