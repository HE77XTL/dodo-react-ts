const webpack = require('webpack');
const {merge} = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');


const baseConfig = require('./webpack.config');
const {SERVER_HOST, SERVER_PORT} = require('./constant');

const tsLoader = baseConfig.module.rules.find((r) => {
    if (r.use) {
        return r.use.loader === 'ts-loader'
    }
    return false

});

if (tsLoader) {
    tsLoader.use.options = {
        ...tsLoader.use.options, // 可能为 undefined
        getCustomTransformers: () => ({
            before: [ReactRefreshTypeScript()],
        }),
        // transpileOnly: true,
    };
}

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: './dist',
        host: SERVER_HOST, // 指定 host，不设置的话默认是 localhost
        port: SERVER_PORT, // 指定端口，默认是8080
        // historyApiFallback: true,// 如果不适用hash 路由，可增加该配置
        client: {
            progress: false,
            overlay: {
                errors: true,
                warnings: false,
            },
        },
        compress: true, // 是否启用 gzip 压缩
        open: true, // 打开默认浏览器
        hot: true, // 热更新

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
    ]
});
