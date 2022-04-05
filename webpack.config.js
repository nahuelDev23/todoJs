const HtmlWebpack = require("html-webpack-plugin")
const MiniCssExtract = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin");
const { ProvidePlugin } = require("webpack");

module.exports = {
    mode: 'development',
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: true,
                    // removeComments: true,
                    // collapseWhitespace: true,
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

        ]
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
            filename: '[name].css',
            // ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "assets/" },
            ],
        }),
        new ProvidePlugin({
            $: 'jquery',
            // jQuery: 'jquery',
        })

    ]
}