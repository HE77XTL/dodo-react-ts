const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.config');
const { SERVER_HOST, SERVER_PORT } = require('./constant');
module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: './dist',
        host: SERVER_HOST, // 指定 host，不设置的话默认是 localhost
        port: SERVER_PORT, // 指定端口，默认是8080
        client: {
            progress: true,
            overlay: {
                errors: true,
                warnings: false,
            },
        },
        compress: true, // 是否启用 gzip 压缩
        open: true, // 打开默认浏览器
        hot: true, // 热更新
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
