import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Item1 = Loadable({
  loader: () => import('./routes/item1/index.js'),
  loading: Loading,
});

const Item2 = Loadable({
  loader: () => import('./routes/item2/index.js'),
  loading: Loading,
});

const Tutorial = Loadable({
  loader: () => import('./routes/tutorial/index.js'),
  loading: Loading,
});



const Routes = () => (
   <Router>
      <Switch>
         <Route exact path="/" component={Item1}/>
         <Route path="/Item2" component={Item2} />
         <Route path="/Tutorial" component={Tutorial} />
      </Switch>
   </Router>
);

export default Routes;