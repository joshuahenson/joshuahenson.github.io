const express = require('express');
const app = express();
const routes = require('./routes/index.js');

/* *************Dev Server******************* */
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
/* **************End Dev Server*************** */


const port = process.env.NODE_PORT || 5000;
const ipaddress = process.env.NODE_IP || 'localhost';

app.use(express.static('public'));

app.use('/', routes);

app.listen(port, ipaddress, () => {
  console.log(`Node app is running on ${ipaddress}:${port}`);
});
