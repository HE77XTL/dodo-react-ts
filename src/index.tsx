// ie 兼容
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';
// import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './reducer/store';
import Router from './router/Router';
import './i18n/index';
import './view/common/css/common.less'

const App = () => <Router />;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
