let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: false,
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "remoteVar", // remote向外暴露的全局变量名
      filename: "remoteEntry.js",
      exposes: {
        "./NewsList": "./src/NewsList",
      },
      shared: ["reace", "react-dom"], // 共享模块,任何一方加载过了,另一个就不需要加载了 中间放了一个share scope共享池共享作用于
      remotes: {
        host: "hostVar@http://localhost:8081/remoteEntry.js ", // 随意起的全局变量名
      },
    }),
  ],
};
