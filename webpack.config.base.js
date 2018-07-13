const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const dev = process.env.NODE_ENV === 'dev'

let cssLoaders = [
    {
        loader: 'css-loader',
        options: {
            importLoaders: 1,
            minimize: !dev,
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:8]'
        }
    },
    {
        loader: 'sass-loader'
    }
]

let config = {
    entry: {
        bundle: './src/client/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // the babel-loader converts new js features into old ones
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        // it's better to have the css in the middle of the html during development so we can use the hot loading
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: dev
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
}

module.exports = {
    config,
    cssLoaders
}
