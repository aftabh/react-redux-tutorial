const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ]
       }
     ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/static/index.html",
      filename: "./index.html"
    })
  ]
};