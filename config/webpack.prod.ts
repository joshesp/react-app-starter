import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { merge } from "webpack-merge"
import { IConfigurationWP, webpackConfig } from "./config"

import common from "./webpack.common"

const production: IConfigurationWP = {
	module: {
		rules: [
			{
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
				test: /.(css)$/,
			},
		],
	},
	mode: "production",
	devtool: "source-map",
	target: "browserslist",
	optimization: {
		splitChunks: {
			chunks: "all",
		},
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `${webpackConfig.staticDir}/${webpackConfig.stylessDir}/[name].[contenthash].css`,
		}),
	],
}

export default merge(common, production)
