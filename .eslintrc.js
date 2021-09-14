const {PROJECT_PATH, IS_DEV} = require('./config/constant');
module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
    },
    "extends": [
        "airbnb-base",
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2021,
        "sourceType": "module"
    },
    // WRONG: Do not use @typescript-eslint/parser on JS files
    // "parser": "@typescript-eslint/parser",
    "plugins": [
        "react",
        "@typescript-eslint",
        "promise",
        "unicorn"
    ],
    "rules": {
        'no-console': IS_DEV  ? 'off' : 'warn',
        'no-debugger': IS_DEV ? 'off' : 'warn',
    },
    "overrides": [
        {
            "files": ["**/*.ts", "**/*.tsx"],
            "plugins": ["@typescript-eslint"],
            "rules": {
                "no-use-before-define": "off",
                "@typescript-eslint/no-use-before-define": ["error"],
            },
        }
    ],
};
