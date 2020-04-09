const path = require('path')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    file: 'bundle.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',

    },
    resolve:{
        
    }
}