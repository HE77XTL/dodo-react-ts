const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssNormalize = require('postcss-normalize');
const ESLintPlugin = require('eslint-webpack-plugin');
const { PROJECT_PATH, IS_DEV } = require('./constant');
const tsImportPluginFactory = require('ts-import-plugin');

const ReactRefreshTypeScript = require('react-refresh-typescript');


const { resolve } = path;

function getTransformersList() {
    let transformersList = [];
    IS_DEV && transformersList.push(ReactRefreshTypeScript());
    transformersList.push(
        tsImportPluginFactory({
            libraryName: 'antd',
            libraryDirectory: 'lib',
            style: true,
        })
    );
    return transformersList;
}

module.exports = {
    mode: 'production',
    target: ['web', 'es5'],
    entry: {
        index: resolve(PROJECT_PATH, './src/index.tsx'),
    },
    output: {
        filename: `static/js/[name].[hash:8].js`,
        path: path.resolve(PROJECT_PATH, './dist'),
        clean: true,
        assetModuleFilename: 'images/[hash][ext][query]'
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
            extensions: ['ts', 'tsx'],
            exclude: '/node_modules/',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.svg/,
                type: 'asset/inline'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        getCustomTransformers: () => ({
                            before: getTransformersList(),
                        }),
                        compilerOptions: {
                            module: 'es2015',
                        },
                    },
                },
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    {
                        loader: IS_DEV
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV,
                            importLoaders: 2,
                            modules: {
                                auto: true,
                                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                                localIdentHashSalt: "dodo",

                            },
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
                            lessOptions: {
                                modifyVars: {
                                    'primary-color': '#095eab',
                                    'link-color': '#095eab',
                                    'menu-dark-bg': '#192a5e',
                                    'menu-dark-inline-submenu-bg': '#122150',
                                    'menu-dark-item-hover-bg': '#0a1949',
                                    'menu-dark-item-active-bg': '#0a1949',
                                    'menu-dark-selected-item-icon-color': '#3963bc',
                                    'menu-dark-selected-item-text-color': '#3963bc',
                                    'menu-dark-highlight-color': '#3963bc',
                                },
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
