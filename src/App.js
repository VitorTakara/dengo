import React, { Component } from 'react';
import Routes from './routes.js'
import './styles/App.scss';
import ReactDOM from 'react-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="black-screen">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;