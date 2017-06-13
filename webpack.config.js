/**
 * Created by pow on 08.05.17.
 */
const path = require('path');
var webpack = require('webpack');
var ghpages = require('gh-pages');

var ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'publicds'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["react-hot-loader" ,"babel-loader"],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192
                }

            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('bundle.css')
    ],

};

ghpages.publish('dist',{
    branch: 'master',
    repo: 'https://github.com/paradoxofvalue/paradoxofvalue.github.io'
}, function(err) {});
