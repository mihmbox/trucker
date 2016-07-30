// TODO CSS: https://webpack.github.io/docs/stylesheets.html


const webpack = require('webpack');
const path = require('path');
//const CommonsPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")
const PathChunkPlugin = require('path-chunk-webpack-plugin');

//const outputPath =  path.resolve(__dirname, '/Content/build/');
const outputPath = path.resolve(__dirname, 'Scripts/build');
const appPath = path.join(__dirname, '/www/app.jsx');
// const nodeModulesPath = path.resolve(__dirname, 'node_modules');
//const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
    // Entry points to the project
    entry: {
        app: [
            appPath,
            'webpack-dev-server/client?https://localhost:3000', // WebpackDevServer host and port
            'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
        ],

    },
    devtool: 'eval',
    output: {
        path: outputPath, // Path of output file
        filename: '[name].js',
    },

    // Server Configuration options
    devServer: {
        // contentBase: './', // Relative directory for base of server
        // outputPublicPath: '/Scripts/build/',
        // devtool: 'eval',
        // hot: false, // Live-reload
        //inline: true,
        port: 3000, // Port Number
        host: 'localhost', // Change to '0.0.0.0' for external facing server
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
        // new webpack.optimize.UglifyJsPlugin()
        //new CommonsPlugin({
        //    name: "common",
        //    chunks: ['react', 'react-dom']
        //})
        // Moves files
        /*
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),
	*/
    ],
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
        }, ],
    },
};

module.exports = config;
