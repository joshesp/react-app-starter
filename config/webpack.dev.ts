import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import { merge } from "webpack-merge"
import common, { Configuration } from "./webpack.common"

const development: Configuration = {
	module: {
		rules: [
			{
				use: ["style-loader", "css-loader", "sass-loader"],
				test: /.(css|scss|sass)$/,
			},
		],
	},
	mode: "development",
	devServer: {
		port: 3000,
		static: "../dist",
		hot: true,
		historyApiFallback: { disableDotRule: true },
	},
	target: "web",
	plugins: [
		new ForkTsCheckerWebpackPlugin({
			async: false,
		}),
	],
	devtool: "eval-source-map",
}

export default merge(common, development)
