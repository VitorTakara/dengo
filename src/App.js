import React, { Component } from 'react';
import Routes from './routes.js'
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Routes />
      </div>
    );
  }
}

export default App;