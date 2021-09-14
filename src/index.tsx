import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
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
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
