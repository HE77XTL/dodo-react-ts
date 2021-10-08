import React from 'react';
import LoginForm from './LoginForm'
import './LoginCommon.less'


const Login: React.FunctionComponent = () => {
    console.log('请记得修改组件名');
    return (
        <div className='login'>
            <div className='loginFormWrap'>
                <LoginForm/>
            </div>
        </div>
    );
};

export default Login;

