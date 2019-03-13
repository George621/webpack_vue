const {join:pathJoin} = require('path');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:'./src/index.js'
    },
    output:{
        filename:'[name].[hash].js',
        path:pathJoin(__dirname,'../dist')
    },
    module: {
      rules: [
        {test: /\.css$/, use: ['style-loader', 'css-loader']},
        // {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
        {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
        {test: /\.(jpg|jpeg|gif|png|)$/, use: 'url-loader'},
        {test: /\.(ttf|woff2|woff|eot|svg)$/, use: 'url-loader'}, // 处理字体文件
        {test: /\.vue$/, use: 'vue-loader'},
        {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
      ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'template.html',
            filename:'index.html'
        }),
        new VueLoaderPlugin(),
        // new CleanWebpackPlugin(['dist'])
    ],
    resolve: {
      alias: {vue: 'vue/dist/vue.js'}
    },
}