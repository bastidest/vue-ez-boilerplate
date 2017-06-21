var express = require('express');
var app = express();
var http = require('http');

var webpack = require('webpack');
var webpackMiddleware = require("webpack-dev-middleware");

http.createServer(app).listen(3000);

app.use(webpackMiddleware(webpack(
	require('./webpack.config.js')
), {
	noInfo: false,
	quiet: false,
	lazy: true,
	watchOptions: {
		aggregateTimeout: 300,
		poll: true
	},
	publicPath: "/dev/"
}));

app.use('/', express.static(__dirname + '/static'));