var webpack = require("webpack");

module.exports = {
    entry: __dirname + "/src/index.js" ,
    output: {
        path: __dirname+"/dist/assets/" ,
        filename: "bundle.js" ,
        publicPath: "/assets/"
    } ,
    devServer: {
        inline: true,
        contentBase: "./dist/",
        port: 3000,
        writeToDisk: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ["babel-loader"]

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader',
            }
        ]
    },
    mode: 'production',


}