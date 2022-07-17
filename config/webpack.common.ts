import { CleanWebpackPlugin } from "clean-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"
import DotenvWebpackPlugin from "dotenv-webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import { IConfigurationWP, webpackConfig } from "./config"

const common: IConfigurationWP = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, `../${webpackConfig.outputDir}`),
		filename: `${webpackConfig.staticDir}/${webpackConfig.scriptsDir}/[name].[contenthash].js`,
		publicPath: webpackConfig.publicPath,
		assetModuleFilename: `${webpackConfig.staticDir}/media/[hash][ext][query]`,
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
		new DotenvWebpackPlugin({
			path: path.join(__dirname, "../.env"),
			safe: true,
		}),
		new HtmlWebpackPlugin({
			template: `./${webpackConfig.publicDir}/index.html`,
		}),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(
						__dirname,
						`../${webpackConfig.publicDir}/*.(json|png|ico|txt)`
					),
					to: path.resolve(__dirname, `../${webpackConfig.outputDir}`),
					context: `${webpackConfig.publicDir}/`,
				},
			],
		}),
	],
}

export default common
