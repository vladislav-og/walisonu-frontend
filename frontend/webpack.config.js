const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.join(__dirname, "/build"),
    filename: "[name].[hash].bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new CopyWebpackPlugin([
      { from: "./public/favicon.ico" },
      { from: "./public/favicon-side.png" },
      { from: "./public/manifest.json" } // <- your path to favicon
    ])
  ],
  devServer: {
    http2: true,
    https: true,
    proxy: { 
        "/api/**": { 
            target: "https://174.129.108.32", 
            secure: false 
        } 
    }
  }
};
