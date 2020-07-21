const path = require('path');
const fs = eval('require("fs")');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../public'),
    assets: 'assets/'
};
const PAGES_DIR = `${PATHS.src}/pug/pages`;
const PAGES = fs
    .readdirSync(PAGES_DIR)
    .filter(fileName => fileName.endsWith(".pug"));

module.exports = {
    externals: {
        path: PATHS
    },
    entry: {
        app: PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(mp4|png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: './postcss.config.js' } }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: './postcss.config.js' } }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            '~': 'src'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`
        }),
        ...PAGES.map(page => new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/,'.html')}`
        })),
        new CopyWebpackPlugin([
            { from: `${PATHS.src}/${PATHS.assets}/img`, to: `${PATHS.assets}img`},
            { from: `${PATHS.src}/${PATHS.assets}video`, to: `${PATHS.assets}video`},
            { from: `${PATHS.src}/${PATHS.assets}/fonts`, to: `${PATHS.assets}fonts`},
            { from: `${PATHS.src}/static`, to: '' }
        ]),
        new CleanWebpackPlugin()
    ]
};