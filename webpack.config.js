var path = require('path');


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

    ],
    stats: {
        colors: true
    },
    devtool: 'source-map',
};
