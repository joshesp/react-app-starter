import { CleanWebpackPlugin } from "clean-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import { Configuration as WebpackConfiguration } from "webpack"
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server"

export interface Configuration extends WebpackConfiguration {
	devServer?: WebpackDevServerConfiguration
}

const common: Configuration = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "../dist"),
		filename: "[name].[contenthash].js",
		publicPath: "",
	},
	module: {
		rules: [
			{
				test: /.(ts|js)x$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react",
							"@babel/preset-typescript",
						],
					},
				},
			},
			{
				test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
				loader: "url-loader",
				options: {
					limit: 10000,
				},
			},
			{
				type: "asset",
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "../public/*.(json|png|ico|txt)"),
					to: path.resolve(__dirname, "../dist"),
					context: "public/",
				},
			],
		}),
	],
}

export default common
