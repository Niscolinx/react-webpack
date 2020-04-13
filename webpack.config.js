const path = require('path')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '/dist'),
        chunkFilename: '[id].js',
        publicPath: '/',
        filename: 'bundle.js'

    },

    resolve: {
        extensions: ['.js', 'jsx']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
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
                loader: 'url-loader?limit=20000&name=images/[name].[ext]'
            }
        ]
    }
}