import React, { Component } from 'react';
import './App.css';
import AddNumberRoot from './components/AddNumberRoot';
import DiplayNumberRoot from './components/DiplayNumberRoot';


class App extends Component {
  state = {number:0}
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot />
        <DiplayNumberRoot number={this.state.number} />
      </div>
    );

  }
}

export default App;
