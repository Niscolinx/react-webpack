const path = require('path')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: 'bundle.js'

    },
    resolve:{
        extensions: ['.js', 'jsx']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: '',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/
            }
        ]
    }
}