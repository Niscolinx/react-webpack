const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = process.env.NODE_ENV === 'development'


module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[id].js',
        publicPath: '',
        filename: 'bundle.js'

    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
        })
    ],


    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    babelrc: false,
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },

            {
                test: /\.module\.s(a|c)ss$/,
                loader: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: isDevelopment
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            Ident: 'postcss',
                            plugins: () => [
                                autoprefixer({
                                    browsers: [
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
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },

            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     use: [
            //         { loader: 'style-loader' },
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 importLoaders: 1,
            //                 modules: true,
            //                 localIdentName: '[name]__[local]__[hash:base64:5]'
            //             }
            //         },
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 Ident: 'postcss',
            //                 plugins: () => [
            //                     autoprefixer({
            //                         browsers: [
            //                             "> 1%",
            //                             "last 2 versions"
            //                         ]
            //                     })
            //                 ]
            //             }
            //         }
            //     ]
            // },

            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=20000&name=images/[name].[ext]'
            }
        ]
    }
}