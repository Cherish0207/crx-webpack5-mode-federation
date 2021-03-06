let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:9000/",
  },
  devtool: false,
  devServer: {
    port: 9000,
  },
  experiments: { topLevelAwait: true },
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
      remotes: {
        remote: "remoteVar@http://localhost:8080/remoteEntry.js ",
        host: "hostVar@http://localhost:8081/remoteEntry.js ",
      },
    }),
  ],
};
