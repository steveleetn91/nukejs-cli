// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: {
    main: "./src/bootstrap.ts"
  },
  output: {
    clean: true, // Clean the output directory before emit.
    path: path.resolve("./build")
  },
  plugins: [
    new webpack.ids.HashedModuleIdsPlugin({
      context: __dirname,
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20,
    }),

    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),

    new MiniCssExtractPlugin(),

    new webpack.ids.DeterministicModuleIdsPlugin({
      maxLength: 10,
    }),

    new CopyPlugin({
      patterns: [
        {
          from: "src/.htaccess"
        }
      ],
    }),

  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", "..."],
  },
  optimization: {
    chunkIds: "named",
    runtimeChunk: {
      name: `runtime`,
    },
    flagIncludedChunks: true,
    minimizer: [new CssMinimizerPlugin(), new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 1000,
    }), '...'],
  },
};
module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
