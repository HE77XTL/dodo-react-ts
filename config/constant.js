const path = require('path');
const IS_DEV = process.env.NODE_ENV !== 'production';
const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 9001;

const PROJECT_PATH = path.resolve(__dirname, '../');
const PROJECT_NAME = path.parse(PROJECT_PATH).name;

module.exports = {
    PROJECT_PATH,
    PROJECT_NAME,
    IS_DEV,
    SERVER_HOST,
    SERVER_PORT,
};
