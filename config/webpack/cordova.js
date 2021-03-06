const path = require('path');
const OpalWebpackResolverPlugin = require('opal-webpack-resolver-plugin');

module.exports = {
    context: path.resolve(__dirname, '../..'),
    mode: "production",
    optimization: {
        minimize: false
    },
    performance: {
        maxAssetSize: 20000000,
        maxEntrypointSize: 20000000
    },
    entry: {
        cordova: './assets/cordova.js'
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../cordova/www/js/app'),
        publicPath: '/js/app/'
    },
    resolve: {
        plugins: [
            new OpalWebpackResolverPlugin('resolve', 'resolved')
        ]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            hmr: false
                        }
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            includePath: [
                                path.resolve(__dirname, './assets')
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(rb|js.rb)$/,
                use: [
                    'opal-webpack-loader'
                ]
            }
        ]
    }
};
