#!/usr/bin/env node
const webpackConfig = require(__dirname + "/../../webpack.config.js");
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const port = 18100;
const compiler = webpack(webpackConfig());
var ip = require('ip');
const server = new webpackDevServer({
    hot:true,
    port: port,
    open: true,
    host: ip.address(),
    historyApiFallback: { index: "/", disableDotRule: true },
  }, compiler);

(async () => {
  await server.start();
  console.log(`Dev server is running at port http://${ip.address()}:${port}` );
})();
