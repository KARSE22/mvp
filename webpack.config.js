const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client/src/index.jsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // [devtool] this is an additional source map that will let the browser know what files are running our code.
  // Helps with error tracing. Without it we will not know where our errors are coming from because it will state that everything inside the bundle file.
  devtool: "eval-cheap-module-source-map",
  // [devServer] configuration for the live server including port
  devServer: {
    historyApiFallback: true,
    // [static] config for how what to serve
    static: {
      directory: path.join(__dirname, "client/public"),
    },
    compress: true,
    // [port] what port on our local machine to run the dev server
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        router: () => "http://localhost:8080",
        // pathRewrite: { "^/api": "" },
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
