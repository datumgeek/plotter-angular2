/// <binding ProjectOpened='Watch - Development' /> 

var webpack = require("webpack");
var path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const styles = [];
const scripts = [];

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        bundle: "./main.ts",
        vendor: './vendor.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js', // Template based on keys in entry above
        pathinfo: true,
        libraryTarget: "amd"
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    watch: true,

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve('./', 'node_modules')]
    },

    plugins: [
        new webpack.DefinePlugin({
            'WEBPACK_ENV': '"dev"'
        })
        // , new HtmlWebpackPlugin({
        //     template: path.resolve('./', '.'),
        //     chunksSortMode: 'dependency'
        // })
        // new webpack.optimize.CommonsChunkPlugin({
        //     // Optimizing ensures loading order in index.html
        //     name: ['styles', 'scripts', 'main'].reverse()
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     minChunks: Infinity,
        //     name: 'inline',
        //     filename: 'inline.js',
        //     sourceMapFilename: 'inline.map'
        // })
    ],

    // devtool: 'eval',
    externals: [
        function (context, request, callback) {
            if (/^dojo/.test(request) ||
                /^dojox/.test(request) ||
                /^dijit/.test(request) ||
                /^esri/.test(request)
            ) {
                return callback(null, "amd " + request);
            }
            callback();
        }
    ],
    devtool: 'source-map',
    module: {
        rules: [
            // { enforce: 'pre', test: /\.ts$/, exclude: /node_modules/, loader: 'tslint' },
            //         loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
            //             exclude: [/\.(spec|e2e)\.ts$/]
            // { test: /\.ts$/, exclude: /node_modules/, loader: 'ts' },
            { test: /\.ts$/, exclude: /node_modules/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
            { test: /\.json$/, loader: 'json' },
            { test: /\.html/, loader: 'html?minimize=false' },
            { test: /\.styl$/, loader: 'css!stylus' },
            { test: /\.css$/, loaders: ['to-string-loader', 'css-loader' ] },
            { test: /\.less$/, loaders: ['to-string-loader', 'css-loader', 'less-loader' ] },
            { test: /\.(gif|png|jpe?g)$/i, loader: 'file?name=dist/images/[name].[ext]' },
            { test: /\.woff2?$/, loader: 'url?name=dist/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff' },
            { test: /\.(ttf|eot|svg)$/, loader: 'file?name=dist/fonts/[name].[ext]' }
        ]
    }
};

function here(d) {
    return d ? path.join(__dirname, d) : __dirname;
}

