import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import Api from '../../axiosRequest/Api';

import AppMenu from './appMenu/AppMenu';

import style from './main.module.less';
import './main.less';

const Main: React.FunctionComponent = () => {
    console.log(11)
    return (
        <div className="appMainPage">
            <div className="mainMenu">
                <AppMenu />
            </div>
            <div className="mainContentWrap">
                <div className="mainHeader">header</div>
                <div className="mainContent">
                    <div style={{ height: '1000px' }}>
                        this is page content
                        <h3>this is main page</h3>
                        <div>
                            <Link to="/login"> to login Page </Link>
                            <Link to="/registry"> to registry Page </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
