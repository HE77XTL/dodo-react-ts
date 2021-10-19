import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input } from 'antd';
import LanguageChange from '../../component/languageChange/LanguageChange';
import './LoginAndRgistry.less';

const Registry: React.FunctionComponent = () => {
    const { t } = useTranslation();
    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <div className="login">
            <div className="languageChangeWrap">
                <LanguageChange />
            </div>
            <div className="loginFormPanel">
                <h3 className="app-text-center panelTitle">{t('registry')}</h3>
                <Form
                    labelCol={{ flex: '0 0 120px' }}
                    labelAlign="right"
                    onFinish={onFinish}
                >
                    <Form.Item label={t('username')} name="username">
                        <Input className="loginFormInput" />
                    </Form.Item>
                    <Form.Item label={t('phone')} name="phone">
                        <Input className="loginFormInput" />
                    </Form.Item>
                    <Form.Item label={t('password')} name="password">
                        <Input className="loginFormInput" />
                    </Form.Item>
                    <Form.Item>
                        <div className="formSubmitBtn">
                            <Button type="primary" htmlType="submit">
                                {t('registry')}
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Registry;
