const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('../config/common');

module.exports = {
    rules: [
        {
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            use: [
                {loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: config.babelPresets
                    }
                }
            ]
        },
        {
            test: /\.styl$/,
            loader: ExtractTextPlugin.extract([
                {
                    loader: 'css-loader',
                    options: {
                        minimize: config.environment !== 'dev'
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
                        minimize: config.environment !== 'dev'
                    }
                }, 'less-loader'])
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(['css-loader'])
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }]
        },
        {
            test: /\.(jpg|svg|png)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }]

        }
    ]

}
;
