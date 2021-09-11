import * as React from 'react';
import * as ReactDOM from "react-dom";
import './he.less'

import css from "./index.module.less"


const App = () => {
    return <div className={css.hello}>
        hello1
        <div className="he">
            1111
        </div>
    </div>;
};

ReactDOM.render(<App/>, document.getElementById('root'));
