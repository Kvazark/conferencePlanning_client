const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let mode = 'development'; 
let target = 'web'; 
if (process.env.NODE_ENV === 'production') { 
  mode = 'production';
  target = 'browserslist'; 
}
if (process.env.SERVE) { 
    plugins.push(new ReactRefreshWebpackPlugin());
  } 

const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html', 
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css', 
      }), 
  ];

module.exports = {

    mode, 
    target,
    plugins,
    entry: './src/index.js', 
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'), 
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true, 
    },

    // resolve: {
    //     fallback: {
    //         util: require.resolve("util/")
    //     }
    // },
    node: {
        fs: `empty`
    },
    
    devServer: {
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
        { test: /\.(html)$/, use: ['html-loader'] }, 
        {
            test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если используется less
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
            type: mode === 'production' ? 'asset' : 'asset/resource',
          },
          {
            test: /\.(woff2?|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.js$/,
            exclude: /node_modules/, // не обрабатываем файлы из node_modules
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true, // Использование кэша для избежания рекомпиляции
                // при каждом запуске
              },
            },
          },
          {
            test: /\.jsx?$/, // обновляем регулярное выражение для поддержки jsx
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          },
      ],
    }
}