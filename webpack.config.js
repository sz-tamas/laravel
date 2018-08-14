const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    target: 'web',
    context: process.cwd(),
    node: {__filename: true, __dirname: true, buffer: false },
    entry: {
        app: path.resolve(__dirname, 'resources/assets/js/app.js'),
        style: path.resolve(process.cwd(), 'resources/assets/sass/style.scss'),
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "js/[chunkhash].js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'app'),
        compress: true,
        port: 8080,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        modules: [__dirname, 'node_modules'],
        alias: {
            app: path.resolve(__dirname, 'resources/assets/js'),
            style: path.resolve(__dirname, 'resources/assets/sass'),
            lang: path.resolve(__dirname, 'resources/lang'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$|.jsx$/,
                exclude: /(node_modules|bower_components|tests)/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        'css-loader?modules=true&importLoaders=1&localIdentName=[local]',
                        'autoprefixer-loader?{browsers: ["last 2 versions", "> 1%", "ie 9", "firefox >= 21", "safari >= 5"], cascade: false}',
                        'sass-loader?sourceMap',
                    ].join('!')
                }),
            },
        ],
    },
    plugins: [
        new CleanPlugin([
            path.resolve(__dirname, 'public/js/**/*.*'),
            path.resolve(__dirname, 'public/css/**/*.*')
        ]),
        new ExtractTextPlugin({ filename: 'css/[chunkhash].css', allChunks: false }),
        new ManifestPlugin()
    ]
};