import React, {useEffect} from 'react';
import axios from "axios";
import { useTranslation } from 'react-i18next';
import { Button, Form, Input } from 'antd';
import LanguageChange from '../../component/languageChange/LanguageChange';
import './LoginAndRgistry.less';
import Api from "../../axiosRequest/Api";


const Login: React.FunctionComponent = () => {

    const { t } = useTranslation();
    const onFinish = (values: any) => {
        axios({
            method: 'post',
            url: 'http://localhost:3001/cats',
            data: {
                he: 123
            },
        }).then(res => {
            console.log(res)
        })
    };

    useEffect(()=> {
        console.log('初始化')
    },[]);

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
