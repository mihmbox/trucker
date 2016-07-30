// TODO CSS: https://webpack.github.io/docs/stylesheets.html


const webpack = require('webpack');
const path = require('path');
//const CommonsPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")
const PathChunkPlugin = require('path-chunk-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// var vendorScripts = {
//     'react': path.resolve(node_modules, 'react/dist/react.min.js'),
//     'jquery': path.resolve(node_modules, 'jquery/dist/jquery.min.js'),
//     'materialize': path.resolve(node_modules, 'materialize-css/dist/js/materialize.min.js')
// };

//const outputPath =  path.resolve(__dirname, '/Content/build/');
const outputPath = path.resolve(__dirname, 'Scripts/build');
const appPath = path.join(__dirname, '/www/app.jsx');
//const fileLoader = "file?name=[path][name].[ext]";

const config = {
    // Entry points to the project
    entry: {
        app: [
            appPath
        ],
        'vendor': [
                'webpack-dev-server/client?https://localhost:3000', // WebpackDevServer host and port
                'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
            ]
            /*.concat(
                        Object.keys(vendorScripts)
                    )*/
    },
    devtool: 'eval',
    output: {
        path: outputPath, // Path of output file
        filename: '[name].js',
    },

    // Server Configuration options
    devServer: {
        port: 3000, // Port Number
        host: 'localhost',
    },
    module: {
        loaders: [{
            test: /.jsx?$/, // Match both .js and .jsx
            //loaders: ['react-hot', 'babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
            loader: ['babel-loader'], // babel loads jsx and es6-7
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ["transform-class-properties"]
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },
        // { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=[path][name].[ext]" },
        // { test: /\.(woff|woff2)$/, loader:"file?prefix=font/&limit=5000&name=[path][name].[ext]" },
        // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream&name=[path][name].[ext]" },
        // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml&name=[path][name].[ext]" },
        // { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=[path][name].[ext]'} // inline base64 URLs for <=8k images, direct URLs for the rest

         {test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file?name=fonts/[path]/[name].[ext]' },
        // { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: fileLoader},
        // { test: /\.(woff|woff2)$/, loader: fileLoader },
        // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: fileLoader },
        // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: fileLoader },
         { test: /\.(png|jpg|jpeg)$/, loader: 'file?name=images/[path]/[name].[ext]' }
    ],
    },
    plugins: [
        // Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
        // Allows error warnings but does not stop compiling.
        new webpack.NoErrorsPlugin(),
        new PathChunkPlugin({
            name: 'vendor',
            test: 'node_modules'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
        new ExtractTextPlugin("app.css", {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ],
};

module.exports = config;
