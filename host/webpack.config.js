let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:8081/", // 访问静态资源路径 默认是/
  },
  devtool: false,
  devServer: {
    port: 8081,
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
      name: "hostVar",
      remotes: {
        remote: "remoteVar@http://localhost:8080/remoteEntry.js ", // 随意起的全局变量名
      },
      filename: "remoteEntry.js",
      exposes: {
        "./Slides": "./src/Slides",
      },
    }),
  ],
};
