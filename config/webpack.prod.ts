import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { merge } from "webpack-merge"
import common, { Configuration } from "./webpack.common"

const production: Configuration = {
	module: {
		rules: [
			{
				use: [MiniCssExtractPlugin.loader, "css-loader"],
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
	plugins: [new MiniCssExtractPlugin()],
}

export default merge(common, production)
