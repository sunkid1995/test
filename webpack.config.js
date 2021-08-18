const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/main/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "some",
    libraryTarget: "umd",
  },
  node: {
    fs: "empty",
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
