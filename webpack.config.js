let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');


module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, '/dist/assets'),
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000
    },
    module: {
        rules:
            [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [{
                        loader: 'babel-loader'
                    }]

                }
            ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: path.join(__dirname, 'src/index.template.html')
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: "defer"
        })

    ],
    stats: {
        colors: true
    },
    devtool: 'source-map',
};
