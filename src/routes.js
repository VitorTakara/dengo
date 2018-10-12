import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div></div>;

const sidebar = Loadable({
    loader: () => import ('./routes/sidebar/index.js'),
    loading: Loading
});

const carrinho = Loadable({
    loader: () => import ('./routes/carrinho/index.js'),
    loading: Loading
});

const Tutorial = Loadable({
    loader: () => import ('./routes/tutorial/index.js'),
    loading: Loading
});

const Loja = Loadable({
    loader: () => import ('./routes/loja/index.js'),
    loading: Loading
});

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path={"/"} component={Tutorial}/>
            <Route exact path={"/sidebar"} component={sidebar}/>
            <Route exact path={"/carrinho"} component={carrinho}/>
            <Route exact path={"/Loja"} component={Loja}/>
        </Switch>
    </Router>
);

export default Routes;