import * as DotEnv from "dotenv"
import path from "path"
import { Configuration as WebpackConfiguration } from "webpack"
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server"

export interface IConfigurationWP extends WebpackConfiguration {
	devServer?: WebpackDevServerConfiguration
}

const dotEnv = DotEnv.config({
	path: path.join(__dirname, "../.env"),
})

interface IConfig {
	outputDir: string
	publicDir: string
	scriptsDir: string
	stylessDir: string
	staticDir: string
	publicPath: string
	port: number | string
}

export const webpackConfig: IConfig = {
	outputDir: dotEnv.parsed?.OUTPUT_DIR || "dist",
	publicDir: dotEnv.parsed?.PUBLIC_DIR || "public",
	scriptsDir: dotEnv.parsed?.SCRIPTS_DIR || "js",
	stylessDir: dotEnv.parsed?.STYLESS_DIR || "css",
	staticDir: dotEnv.parsed?.STATIC_DIR || "static",
	publicPath: dotEnv.parsed?.PUBLIC_PATH || "/",
	port: dotEnv.parsed?.PORT || 3000,
}
