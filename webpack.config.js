const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    popup: path.resolve("./src/popup/popup.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/", // Public URL of the output directory when referenced in a browser
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Match ts and tsx files
        exclude: /node_modules/,
        use: "ts-loader", // Use ts-loader for TypeScript files
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/assets/manifest.json"),
          to: path.resolve("dist"),
        },
        {
          from: path.resolve("src/assets/icon.png"),
          to: path.resolve("dist"),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: "ReactTS Boilerplate",
      filename: "popup.html",
      chunks: ["popup"],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"), // Serve content from the dist directory
    compress: true,
    port: 3000, // Port to run dev server
    historyApiFallback: true, // Fallback to index.html for SPA routing
  },
}
