module.exports = {
	testEnvironment: "jest-environment-jsdom",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	transform: {
		"^.+\\.(ts|tsx)?$": "ts-jest",
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)?$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
	cacheDirectory: ".cache/jest",
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/__mocks__/fileMock.js",
		"\\.(css|less)$": "identity-obj-proxy",
	},
	testPathIgnorePatterns: [
		"<rootDir>/.cache/",
		"<rootDir>/.github/",
		"<rootDir>/.vscode/",
		"<rootDir>/dist/",
	],
	collectCoverage: true,
	verbose: true,
}
