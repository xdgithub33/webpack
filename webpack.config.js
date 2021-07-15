const path = require('path');


const HtmlWebpackPlugin = require('html-webpack-plugin'); //版本5.3.2 有问题 require(...).pathToFileURL is not a function

const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //坑： 使用ES6解构语法

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    // watch:true,

    // 浏览器自动加载页面
    devServer: {
        contentBase: './dist' // 坑 webpack-cli的新版本对webpack-dev-server版本的不兼容 npm i webpack-cli@3.3.12 -D
    },
    plugins: [
        // 坑 不是数组 是对象参数
        new CleanWebpackPlugin({
            path: './dist',
            cleanStaleWebpackAssets: false, // "watch": "webpack --watch", 要加该参数，否则会删除dist里的html文件
        }),

        new HtmlWebpackPlugin({
            title: '管理输出'
        })
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },


};
