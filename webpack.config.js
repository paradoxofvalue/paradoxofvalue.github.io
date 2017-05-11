/**
 * Created by pow on 08.05.17.
 */
const path = require('path');
var webpack = require('webpack');

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
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};