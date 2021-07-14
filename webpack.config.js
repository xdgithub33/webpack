const path = require('path');


const HtmlWebpackPlugin = require('html-webpack-plugin'); //版本5.3.2 有问题 require(...).pathToFileURL is not a function

const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //坑： 使用ES6解构语法

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },

    plugins: [
        // 坑 不是数组 是对象参数
        new CleanWebpackPlugin({
            path: './dist'
        }),

        new HtmlWebpackPlugin({
            title: '管理输出'
        })
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },


};
