const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {PROJECT_PATH, IS_DEV} = require('./constant');
const {resolve} = path;
module.exports = {
    mode: 'production',
    entry: {
        index: resolve(PROJECT_PATH, './src/index.js')
    },
    output: {
        filename: `static/js/[name].[hash:8].js`,
        path: path.resolve(PROJECT_PATH, './dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(PROJECT_PATH, './public/index.html'),
            filename: 'index.html',
            cache: false, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
        })
    ]
};
