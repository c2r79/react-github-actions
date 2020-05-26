/* eslint-disable no-undef */

const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

process.env.NODE_ENV = "development";
/**
 * Development webpack config designed to be loaded by express development server
 */

module.exports = {
  /**
   * The scripts in entry are combined in order to create our bundle
   */
  mode: "development",
  target: "web",
  devtool: "cheap-module-source-map",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devServer: {
    // reduces the amount of info written to the command line
    stats: "minimal",
    // overlays any errors that occur in the browser
    overlay: true,
    // all requests will be sent to index.html. This way all deep links will be handled by React router
    historyApiFallback: true,
    // These next 3 are due an issue w/ Chrome that may have been resolved already
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
