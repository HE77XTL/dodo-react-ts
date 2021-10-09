import React from 'react';
import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './LanguageChange.less';

const LanguageChange: React.FunctionComponent = () => {
    const { i18n } = useTranslation();
    const languageOptions = [
        {
            key: 'enGB',
            name: 'English',
        },
        {
            key: 'zhCN',
            name: '中文',
        },
    ];

    function getCurrentLanguage(language: string): string {
        const currentLanguage = languageOptions.find(
            (item) => item.key === language
        ) || {
            key: 'zhCN',
            name: '中文',
        };
        return currentLanguage.name;
    }

    function onLanguageClick(language: string) {
        i18n.changeLanguage(language)
            .then()
            .catch(() => {
                message.error('change language fail');
            });
    }

    const languageSelect = (
        <Menu>
            {languageOptions.map((item) => (
                <Menu.Item key={item.key}>
                    <div
                        className="languageOptionItem"
                        onClick={() => {
                            onLanguageClick(item.key);
                        }}
                    >
                        {item.name}
                    </div>
                </Menu.Item>
            ))}
        </Menu>
    );
    return (
        <div className="languageChange app-main-color">
            <Dropdown overlay={languageSelect} placement="bottomRight">
                <div className="currentLanguageWrap">
                    <span className="currentLanguageName">
                        {getCurrentLanguage(i18n.language)}
                    </span>
                    <DownOutlined />
                </div>
            </Dropdown>
        </div>
    );
};

export default LanguageChange;
