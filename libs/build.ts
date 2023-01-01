#!/usr/bin/env node
import * as cli from "cli";
import ProgressVNF from "./progress.vnf";
const webpackConfig = require(__dirname + "/../../webpack.config.js");
const webpack = require('webpack');
const Progress: ProgressVNF = new ProgressVNF();
Progress.init();
for (let i = 0; i < 99; i++) {
    setTimeout(() => {
        Progress.increment();
    },i * (Math.random() * 1000));
}
webpack(webpackConfig(),async (error: any,stat : any) => {
    if (error) {
        cli.error(`\n ${error.toString()} \n`);
   }

   if (stat.hasErrors()) {
        cli.error(`\n ${stat.toString()} \n`);
   }
   if(stat) {
    Progress.update(100).stop();
   }
});
