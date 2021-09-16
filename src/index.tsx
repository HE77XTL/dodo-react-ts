import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import './i18n/index'

import { HashRouter, Switch, Route, Link } from 'react-router-dom';

import About from './view/about/About';
import Home from './view/home/Home';

import './he.less';

const App = () => {
    function a() {
        return new Promise((resolve) => {
            console.log(888);
            resolve(1);
        });
    }

    a();

    return (
        <div className="demoPage">
            hello1
            <div className="he">1111</div>
            <div className="parent">
                parent
                <div className="child">child</div>
                <div className="child">child</div>
                <div className="childC">child</div>
            </div>
            <div className="childC">child</div>
            <HashRouter>
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
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
