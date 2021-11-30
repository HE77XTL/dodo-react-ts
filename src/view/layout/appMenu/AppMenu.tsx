import React, { useState } from 'react';
// import useSWR from 'swr';
import { Menu } from 'antd';
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const AppMenu: React.FunctionComponent = () => {

    // const fetcher = (url: string) => fetch(url).then((res) => res.json());

    // const { data, error } = useSWR('http://localhost:3001/cats', fetcher);

    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    const [openKeys, setOpenKeys] = useState(['sub1']);

    function onOpenChange(keys: Array<any>) {
        console.log('keys');
        console.log(keys);

        const latestOpenKey = keys.find(
            (key: string) => openKeys.indexOf(key) === -1
        );
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    }

    return (
        <div>
            <div
                style={{ height: '80px', background: '#ccc', padding: '10px' }}
            >
                logo
                <div>{openKeys}</div>
            </div>
            <Menu
                mode="inline"
                theme={'dark'}
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{ width: 256 }}
            >
                <SubMenu
                    key="sub1"
                    icon={<MailOutlined />}
                    title="Navigation One"
                >
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    icon={<AppstoreOutlined />}
                    title="Navigation Two"
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu
                    key="sub4"
                    icon={<SettingOutlined />}
                    title="Navigation Three"
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
};

export default AppMenu;
