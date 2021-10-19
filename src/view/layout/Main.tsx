import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import useRequest from '../../hooks/useRequest';
import Api from '../../axiosRequest/Api';

const Main: React.FunctionComponent = () => {
    //  this is main layout page
    console.log('main');
    const { run: getCats, response } = useRequest(Api.getCats);
    const { run: createCats } = useRequest(Api.createCats, { manual: true });

    function requestTest() {
        getCats();
    }

    return (
        <div>
            <h3>this is main page</h3>
            <div>
                <Link to="/login"> to login Page </Link>
                <Link to="/registry"> to registry Page </Link>
            </div>
            <div>this is page content</div>
            <div>
                <Button onClick={requestTest}>request</Button>
                <Button onClick={createCats}>need Login</Button>
            </div>
            <div>
                <p>this is response </p>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default Main;
