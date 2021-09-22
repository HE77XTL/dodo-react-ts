import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import './i18n/index';

import Router from './router/Router';

const App = () => <Router />;

ReactDOM.render(<App />, document.getElementById('root'));
