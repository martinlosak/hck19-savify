const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const WorkboxPlugin = require('workbox-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const sourceMap = true
const allInterfaces = true
const outputDir = __dirname + '/dist'

module.exports = (emv, argv) => {
    const isDev = argv.mode === 'development'

    return {
        output: {
            path: outputDir
        },
        resolve: {},
        optimization: {
            // Keep the runtime chunk seperated to enable long term caching
            // https://twitter.com/wSokra/status/969679223278505985
            runtimeChunk: true
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/,
                    loaders: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader'
                        }
                    ]
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: {minimize: true}
                        }
                    ]
                },
                {
                    test: /\.(sass|scss)$/,
                    use: [
                        {
                            loader: 'style-loader',
                            options: {
                                hmr: true
                            }
                        }, // creates style nodes from JS strings
                        {
                            loader: 'css-loader', options: {
                                sourceMap
                            }
                        }, // translates CSS into CommonJS
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap
                            }
                        } // compiles Sass to CSS, using Node Sass by default
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin([outputDir]),
            new HtmlWebPackPlugin({
                template: './src/static/index.html',
                filename: './index.html'
            }),
            new webpack.HotModuleReplacementPlugin(),
            // to have Onsen frame
            new WorkboxPlugin.InjectManifest({ // see https://webpack.js.org/guides/progressive-web-application/
                // these options encourage the ServiceWorkers to get in there fast
                // and not allow any straggling "old" SWs to hang around
                // clientsClaim: true,
                // skipWaiting: true,
                swSrc: './src/sw.js',
                swDest: 'sw.js'
            }),
            new WebpackPwaManifest({
                name: 'Savify',
                short_name: 'Savify',
                description: 'Simple money books',
                background_color: '#ffffff',
                fingerprints: false,
                crossorigin: 'anonymous', //can be null, use-credentials or anonymous
                icons: [
                    {
                        src: path.resolve('src/logo/f10-logo.png'),
                        sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
                    }
                ]
            }),
            new webpack.DefinePlugin({
                'window._DEV': isDev
            }),
            new CopyWebpackPlugin(['src/onsen/frame']) // Position as last so the files are not part of the manifest
        ],
        devServer: {
            historyApiFallback: true,
            host: allInterfaces ? '0.0.0.0' : 'localhost',
            openPage: 'frame.html?src=/',
            hot: true
        },
        devtool: 'cheap-module-source-map'
    }
}
