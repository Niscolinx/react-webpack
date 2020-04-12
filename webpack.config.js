const path = require('path')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        filename: 'bundle.js'

    },
    resolve: {
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
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            Ident: 'postcss',
                            plugins: () => [
                                autoprefixer({
                                    browsers : [
                                        "> 1%",
                                        "last 2 versions"
                                    ]
                                })
                            ]
                        }
                    }
                ]
            },

            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=40000&name=images/[name].[ext]'
            }
        ]
    }
}