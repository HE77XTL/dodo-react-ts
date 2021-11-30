import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from '../view/home/Home';
import NotMatch from '../view/404/NotMatch';
import Main from '../view/layout/Main';
import Login from '../view/login/Login';
import Registry from '../view/login/Registry';
import Test from '../view/test/Test';

const Router: React.FunctionComponent = () => (
    <HashRouter>
        <Switch>
            <Route path="/" exact={true}>
                <Main />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/registry">
                <Registry />
            </Route>
            <Route path="/test">
                <Test />
            </Route>
            {/* 404, 请保持该路由为最后一个 */}
            <Route path="*">
                <NotMatch />
            </Route>
        </Switch>
    </HashRouter>
);

export default Router;
