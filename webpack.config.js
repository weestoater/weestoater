const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = {
  entry: {
    app: "/src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    chunkFilename: "assets/img/[name].[ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader", // for styles
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[ext]",
        },
      },
      {
        test: /\.(woff2?|ttf|eot)(\?v=\w+)?$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[ext]",
        },
      },
      {
        test: /\.mp4$/,
        use: "file-loader?name=videos/[name].[ext]",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // base html
    }),
  ],
  performance: {
    hints: false,
  },
  resolve: {
    alias: {
      config$: "./configs/app-config.js",
    },
    extensions: [".js", ".jsx"],
  },
};

const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  output: {
    path: path.resolve(__dirname, "dev"),
  },
};

const prodConfig = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
  },
};

module.exports = (env, argv) => {
  console.info("NODE_ENV:", argv.mode);
  return argv.mode === "production"
    ? merge(commonConfig, prodConfig)
    : merge(commonConfig, devConfig);
};
