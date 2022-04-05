const HtmlWebpack = require("html-webpack-plugin")
const MiniCssExtract = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizer = require("css-minimizer-webpack-plugin")
const Terser = require('terser-webpack-plugin');
const { ProvidePlugin } = require("webpack");


module.exports = {
    mode: 'production',
    output: {
        clean: true,
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: true,
                    minimize: true,
                }
            },
            {
                test: /\.scss$/,
                exclude: /styles.scss$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'sass-loader',
                    options: {
                        webpackImporter: false,
                        sassOptions: {
                            includePaths: ['node_modules'],
                        },
                        implementation: require('dart-sass'),
                    }
                }],
               
            },
            {
                test: /styles.scss$/,
                use: [MiniCssExtract.loader, "css-loader", "sass-loader"],
                
                
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',

            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizer(), new Terser()]
    },
    plugins: [
        new HtmlWebpack({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['main']
        }),
        new HtmlWebpack({
            // filename: 'index.html',
            filename: 'contacto.html',
            template: './src/contacto.html',
            chunks: ['contacto']
        }),
        new MiniCssExtract({
            filename: '[name].[fullhash].css',
            
            // ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "assets/" },
                // {from:'src/pages',to:'pages/'},
            ],
        }),
        new ProvidePlugin({
            $: 'jquery',
        })

    ]
}