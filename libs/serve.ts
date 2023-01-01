#!/usr/bin/env node
const webpackConfig = require(__dirname + "/../../webpack.config.js");
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const port = 8000 + Number((Math.random() * 10000).toString().substring(0, 4));
const compiler = webpack(webpackConfig());
const server = new webpackDevServer({
    hot:true,
    port: port,
    open: true,
    host: "localhost",
    historyApiFallback: { index: "/", disableDotRule: true },
  }, compiler);

(async () => {
  await server.start();
  console.log('dev server is running at port:' + port);
})();
