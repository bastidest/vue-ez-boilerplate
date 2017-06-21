var webpack = require('webpack');

module.exports = {
	entry: {
		main: "./src/main.js"
	},
	output: {
		path: "/",
		filename: "[name]bundle.js"
	},
	resolve: {
		alias: {
			'vue$': __dirname + '/node_modules/vue/dist/vue.common.js'
		}
	},
	module: {
		loaders: [
			{
				test: /\.(sass|scss)$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.css$/,
				loaders: ["style-loader", "css-loader"]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					// vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};