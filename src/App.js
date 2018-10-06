import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import './styles/App.scss';

const Loading = () => <div>Loading...</div>;

const Item1 = Loadable({
  loader: () => import('./routes/item1/index.js'),
  loading: Loading,
});

const Item2 = Loadable({
  loader: () => import('./routes/item2/index.js'),
  loading: Loading,
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a href="/">Item 1</a>
          <a href="/Item2">Item 2</a>
          <Router>
            <Switch>
              <Route exact path="/" component={Item1}/>
              <Route path="/Item2" component={Item2} />
            </Switch>
          </Router>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;