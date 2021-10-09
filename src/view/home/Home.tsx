import React from 'react';
import { Button, Menu, Dropdown  } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const Home: React.FunctionComponent = () => {
    const { t } = useTranslation();
    console.log(t);

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            </Menu.Item>
            <Menu.Item icon={<DownOutlined />} disabled>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item (disabled)
                </a>
            </Menu.Item>
            <Menu.Item disabled>
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item (disabled)
                </a>
            </Menu.Item>
            <Menu.Item danger>a danger item</Menu.Item>
        </Menu>
    );

    return (
        <div>
            this is home page
            <div>
                <a href="#he">btn114</a>
            </div>
            <div id="he">
                <Button type="primary">123</Button>
            </div>
            <div>
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Hover me <DownOutlined />
                    </a>
                </Dropdown>
            </div>
        </div>
    );
};

export default Home;
