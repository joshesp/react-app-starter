import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
import { merge } from "webpack-merge"
import { IConfigurationWP, webpackConfig } from "./config"
import common from "./webpack.common"

const development: IConfigurationWP = {
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
		port: webpackConfig.port,
		static: `../${webpackConfig.outputDir}`,
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
