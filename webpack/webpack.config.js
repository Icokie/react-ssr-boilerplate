/* global __dirname require module */

const path = require('path');
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

const rootDir = path.resolve(__dirname, '../');
const config = require('../config/common');

module.exports = {
    context: path.resolve(rootDir, 'src/app/client'),
    entry: {
        index: ['core-js/fn/promise', './index']
    },
    resolve: {
        extensions: ['.styl', '.less', '.js', '.css', '.jsx'],
        modules: ['node_modules']
    },
    output: {
        path: path.resolve(rootDir, 'build'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].js?[hash:4]'
    },

    devtool: config.environment === 'dev' ? '#cheap-module-eval-source-map' : false,

    cache: config.environment === 'dev',

    module: loaders,
    plugins
};
