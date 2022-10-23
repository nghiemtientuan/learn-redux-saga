const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VENDOR_LIBS = [
    'axios',
    'bootstrap',
    'jquery',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-thunk'
];
const devServer = {
    port: 3000,
    open: true,
    disableHostCheck: true,
    historyApiFallback: true,
    overlay: true,
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    inline: true,
};

module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/'
            },
            {
                use: [
                    'style-loader',
                    'css-loader'
                ],
                test: /\.css$/
            },
            {
                loader: 'file-loader',
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
            }
        ]
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'windown.$': 'jquery',
            'windown.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/, // you may add "vendor.js" here if you want to
                    name: "vendor",
                    chunks: "initial",
                    enforce: true
                }
            }
        },
        runtimeChunk: {
            name: "manifest",
        },
    },
    devServer
}