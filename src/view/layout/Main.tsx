import React from 'react';
import {Link} from "react-router-dom";

const Main: React.FunctionComponent = () => {

    //  this is main layout page
    console.log('main');


    return <div>
        <h3>this is main page</h3>
        <div>
            <Link to='/login'> to login Page </Link>
            <Link to='/registry'> to registry Page </Link>
        </div>
        <div>
            this is page content
        </div>
    </div>;
};

export default Main;
