import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import About from '../view/about/About';
import Home from '../view/home/Home';
import NotMatch from '../view/404/NotMatch';
import Main from '../view/layout/Main';
import Login from '../view/login/Login';

const Router: React.FunctionComponent = () => (
    <HashRouter>
        <Switch>
            <Route path="/" exact={true}>
                <Main />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            {/* 404, 请保持该路由为最后一个 */}
            <Route path="*">
                <NotMatch />
            </Route>
        </Switch>
    </HashRouter>
);

export default Router;
