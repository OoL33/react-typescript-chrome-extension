const { merge } = require("webpack-merge")
const path = require("path")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Serve content from the dist directory
    },
    compress: true,
    port: 3000, // Port to run dev server
    historyApiFallback: true, // Fallback to index.html for SPA routing
  },
})
