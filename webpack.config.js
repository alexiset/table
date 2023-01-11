const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: "./src/index.tsx",
    output:{
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist",
        filename: "js/bundle.js" // имя бандла
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/"),
        },
        port: 8083,
        open: true
    },
    module:{
        rules:[
            {
                test: /\.ts[x]?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['solid', "@babel/preset-react"],
                        },
                    },
                    {
                        loader: 'ts-loader',
                    },
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]_[local]_[hash:base64:5]',
                            },
                            esModule: false,
                            sourceMap: true
                        },
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|jpg)$/,
                include:  path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[contenthash:8].[ext]',
                            limit: 1,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [].concat(devMode ? [] : [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        })
    ]),
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@interfaces': path.resolve(__dirname, 'src/interfaces'),
        },
    }
}
