import * as React from 'react';
import * as ReactDOM from "react-dom";
import './he.less'

import css from "./index.module.less"


const App = () => {
    return <div className='demoPage'>
        hello1
        <div className="he">
            1111
        </div>
        <div className='parent'>
            parent
            <div className='child'>
                child
            </div>
            <div className='child'>
                child
            </div>
            <div className='childC'>
                child
            </div>
        </div>
        <div className='childC'>
            child
        </div>
    </div>;
};

ReactDOM.render(<App/>, document.getElementById('root'));
