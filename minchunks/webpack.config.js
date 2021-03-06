const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    foo: "./src/foo",
    bar: "./src/bar"
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].bundle.[hash:7].js",
    chunkFilename: "[name].chunk.[chunkhash:7].js"
  },
  plugins: [new CleanWebpackPlugin.CleanWebpackPlugin({})],
  optimization: {
    minimize: false,
    moduleIds: "named",
    splitChunks: {
      chunks: "initial",
      cacheGroups: {
        default: {
          minSize: 16,
          minChunks: 1,
        }
      }
    }
  }
};
