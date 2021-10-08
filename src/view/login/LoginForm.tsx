import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import './LoginCommon.less';
import { useTranslation } from 'react-i18next';

const LoginForm: React.FunctionComponent = () => {
    const {t} = useTranslation();
     // const { t } = useTranslation(['loginNSTest']);
    console.log(t)
    console.log(t('hello'))


    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    return (
        <div className="loginFormPanel">
            <h3 className='app-text-center panelTitle'>{t('login')}</h3>
            <Form
                labelCol={{ flex: '0 0 120px' }}
                labelAlign="right"
                onFinish={onFinish}
            >
                <Form.Item label="Username" name="username">
                    <Input className="loginFormInput" />
                </Form.Item>
                <Form.Item label="Password" name="Password">
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
    );
};

export default LoginForm;
