import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enGB from './locales/en/en_GB';
import zhCN from './locales/zh/zh_CN';

import zhLoginNSTest from './locales/zh/zh_loginNSTest';
import enLoginNSTest from './locales/en/en_loginNSTest';



const resources = {
    enGB: {
        translation: enGB,
        loginNSTest: enLoginNSTest
    },
    zhCN: {
        translation: zhCN,
        loginNSTest: zhLoginNSTest,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'enGB',
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
        escapeValue: false, // react already safes from xss
    },
});

export default i18n
