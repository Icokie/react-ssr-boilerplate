/* global __dirname require module */

const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const config = require('../config/dev.js');

const rootDir = path.resolve(__dirname, '../');

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

    devtool: '#cheap-module-eval-source-map',

    cache: true,

    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: config.babelPresets
                }
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract([
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: false
                        }
                    },
                    {
                        loader: 'stylus-loader',
                        options: {
                            resolveURL: true,
                            includeCss: true
                        }
                    }
                ])
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract([
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: false
                        }
                    }, 'less-loader'])
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['css-loader'])
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.(jpg|svg|png)$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]

    },
    plugins: [
        new CommonsChunkPlugin({
            name: 'common',
            minChunks: 2
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            PRODUCTION: false
        })
    ]
};
