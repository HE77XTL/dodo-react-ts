// ie 兼容
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';
// import "@babel/polyfill";

import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router/Router';
import './i18n/index';
import './asset/css/common.less'

const App = () => <Router />;

ReactDOM.render(<App />, document.getElementById('root'));
