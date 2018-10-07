import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routes/home/index.js'),
  loading: Loading,
});

const sidebar = Loadable({
  loader: () => import('./routes/sidebar/index.js'),
  loading: Loading,
});

const Tutorial = Loadable({
  loader: () => import('./routes/tutorial/index.js'),
  loading: Loading,
});

const Loja = Loadable({
  loader: () => import('./routes/loja/index.js'),
  loading: Loading,
});



const Routes = () => (
   <Router>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/sidebar" component={sidebar} />
         <Route path="/Tutorial" component={Tutorial} />
         <Route path="/Loja" component={Loja} />
      </Switch>
   </Router>
);

export default Routes;