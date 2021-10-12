import React from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input } from 'antd';
import LanguageChange from '../../component/languageChange/LanguageChange';
import './LoginAndRgistry.less';

import useRequest from '../../hooks/useRequest';

const Login: React.FunctionComponent = () => {
    const { t } = useTranslation();
    const { run } = useRequest({
        url: 'url'
    });

    const onFinish = (values: any) => {

        run();

        console.log('Success:', values);
        axios({
            method: 'get',
            url: 'http://localhost:3000/',
        }).then((res) => {
            console.log(res);
        });
    };

    return (
        <div className="login">
            <div className="languageChangeWrap">
                <LanguageChange />
            </div>
            <div className="loginFormPanel">
                <h3 className="app-text-center panelTitle">{t('login')}</h3>
                <Form
                    labelCol={{ flex: '0 0 120px' }}
                    labelAlign="right"
                    onFinish={onFinish}
                >
                    <Form.Item label={t('username')} name="username">
                        <Input className="loginFormInput" />
                    </Form.Item>
                    <Form.Item label={t('password')} name="Password">
                        <Input className="loginFormInput" />
                    </Form.Item>
                    <Form.Item>
                        <div className="formSubmitBtn">
                            <Button type="primary" htmlType="submit">
                                {t('login')}
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
