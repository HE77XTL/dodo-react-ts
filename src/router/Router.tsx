import React from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import About from '../view/about/About';
import Home from '../view/home/Home';
import NotMatch from '../view/404/NotMatch';

const Router: React.FunctionComponent = () => (
    <HashRouter>
        <div>
            <div>
                router demo
                <nav>
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/home">
                <Home />
            </Route>

            {/* 404, 请保持该路由为最后一个 */}
            <Route path="*">
                <NotMatch />
            </Route>
        </Switch>
    </HashRouter>
);

export default Router;
