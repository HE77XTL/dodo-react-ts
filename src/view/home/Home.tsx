import React from 'react';
import { Button } from 'antd';

const Home: React.FunctionComponent = () => {
    console.log('锚点测试')
    // 浏览器自带的锚点跳转功能是比较生硬的，且锚点 # 与hash 路由冲突。
    // 自己封装锚点组件， 使用hash 路由（作者喜欢， 不要来抬杠，如果实在不能满足需求， 摆出理由）
    return <div>
        this is home page
        <div>
            <a href="#he">btn</a>
        </div>
        <div style={{height: '1500px'}}>
            temp
        </div>
        <div id="he">
            dddd
            <Button type='primary'>123</Button>
        </div>
    </div>;
};

export default Home;
