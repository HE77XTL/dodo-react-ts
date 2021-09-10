const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {PROJECT_PATH, IS_DEV} = require('./constant');
const {resolve} = path;
module.exports = {
    mode: 'production',
    entry: {
        index: resolve(PROJECT_PATH, './src/index.ts')
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
        }),
        new MiniCssExtractPlugin({
            filename: `static/css/[name]_v[hash].css`,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: IS_DEV,
                        },
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
