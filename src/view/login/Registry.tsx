import React from 'react';
import { useTranslation } from 'react-i18next';
import {useHistory} from "react-router-dom";
import { Button, Form, Input } from 'antd';
import LanguageChange from '../../component/languageChange/LanguageChange';
import './LoginAndRgistry.less';
import useRequest from "../../hooks/useRequest";
import Api from "../../axiosRequest/Api";


const Registry: React.FunctionComponent = () => {
    const { t } = useTranslation();
    const history = useHistory();

    const { run: getCats, response } = useRequest(Api.getCats);
    const { run: createCats, response: createCatsResponse, error } = useRequest(Api.createCats);

    const onFinish = (values: any) => {
        getCats();
        createCats();
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
            <div>
                <Button onClick={()=> {
                    history.push('/login')
                }}>registry</Button>
            </div>
            <div>{JSON.stringify(response)}</div>
            <div>{JSON.stringify(createCatsResponse)}</div>
            <div>{JSON.stringify(error)}</div>
        </div>
    );
};

export default Registry;
