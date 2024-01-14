const path = require("path")

module.exports = {
  entry: {
    app: "./src/main.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public")
    },
    devMiddleware: {
      writeToDisk: true
    },
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  devtool: "source-map"
}
