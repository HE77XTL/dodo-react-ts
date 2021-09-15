const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssNormalize = require('postcss-normalize');
const ESLintPlugin = require('eslint-webpack-plugin');
const {PROJECT_PATH, IS_DEV} = require('./constant');

const {resolve} = path;

module.exports = {
    mode: 'production',
    target: ['web', 'es5'],
    entry: {
        index: resolve(PROJECT_PATH, './src/index.tsx')
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
        new ESLintPlugin({
            extensions: ['ts', 'tsx',],
            exclude: '/node_modules/'
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    {
                        loader: IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-flexbugs-fixes'),
                                    [
                                        'postcss-preset-env',
                                        {
                                            // 选项
                                        },
                                    ],
                                    postcssNormalize(),
                                ],
                            },
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


