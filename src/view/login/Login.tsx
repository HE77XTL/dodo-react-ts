import React from 'react';
import LoginForm from './LoginForm'
import LanguageChange from '../../component/languageChange/LanguageChange'
import './LoginCommon.less'


const Login: React.FunctionComponent = () => {
    console.log('请记得修改组件名');
    // loginFormWrap 使用了绝对定位， 避免处理z-index 覆盖问题， 后续需要在页面增加内容， 可以加在loginFormWrap里面
    return (
        <div className='login'>
            <div className='loginFormWrap'>
                <div className='languageChangeWrap'>
                    <LanguageChange/>
                </div>
                <LoginForm/>
            </div>
        </div>
    );
};

export default Login;

