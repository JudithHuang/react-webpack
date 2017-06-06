 const path = require('path');
 const webpack = require('webpack');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
     entry: path.resolve(__dirname, 'src/main.js'),
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'bundle.js'
     },
     resolve: {
        extensions: ['.js', '.jsx']
     },
     module: {
        loaders: [
            { test: /\.js|jsx$/, loaders: ['babel-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            title: 'Test for react + webpack'
        })
    ]
 };