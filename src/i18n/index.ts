import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enGB from './locales/en_GB';
import zhCN from './locales/zh_CN';

const resources = {
    enGB: {
        translation: enGB,
    },
    zhCN: {
        translation: zhCN,
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
