import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { hello: [] }

  // Fetch passwords after first mount
  componentDidMount() {
    this.getHello();
  }

  getHello = () => {
    // Get the passwords and store them in state
    fetch('/api/newapp')
      .then(res => res.json())
      .then(hello => this.setState({ hello }))
  }

  render() {
    const { hello } = this.state;

    return (
      <div className="App">
        <div>{hello} There</div>
      </div>
    );
  }
}

export default App;
