import React from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

const Home: React.FunctionComponent = () => {
    const { t } = useTranslation();
    console.log(t);
    return (
        <div>
            this is home page
            <div>
                <a href="#he">btn114</a>
            </div>
            <div id="he">
                <Button type="primary">123</Button>
            </div>
        </div>
    );
};

export default Home;
