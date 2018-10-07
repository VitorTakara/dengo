import React, { Component } from 'react';
import Routes from './routes.js'
import './styles/App.scss';
import FloatingButtons from './routes/floatingbuttons/index.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="black-screen">
          <Routes />
          <FloatingButtons />
        </div>
      </div>
    );
  }
}

export default App;