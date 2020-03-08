
module.exports = {
    entry: './enter.js',
    output: {
        publicPath: 'xuni',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './www',
        port: 8080
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    },
                ],
            },
        ],
    }
};