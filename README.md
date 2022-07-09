
# Template React Application

This repo contains the initial configuration for a react application. The reason to make this repo is to learn how to configure a react project from scratch.

Next I list the packages and configurations added step by step.

## Features

- Pre-configured Webpack and Babel to handle the modules.
- Pre-configured quality tools ESLint, Prettier, TypeScript.
- Pre-configured Jest.js to make your test.
- Pre-configured Husky.js to create hooks for you commits
- Pre-configured VSCode with some settings

## Directory structure

`├──`[`.vscode`](.vscode) — VSCode settings.<br>
`├──`[`.husky`](.husky) — Hooks to commits.<br>
`├──`[`__mocks__`](./__mocks__) — Directory to add fake/mock data for testing.<br>
`├──`[`__tests__`](./__tests__) — Directory to add unit test.<br>
`├──`[`config`](./config) — There are webpack config files.<br>
`├──`[`public`](./public) — Static assets.<br>
`├──`[`src`](./src) — React components.<br>

## Tech Stack

- [React](https://reactjs.org/)

- [TypeScript](https://www.typescriptlang.org/), [Babel](https://babeljs.io/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [Jest](https://jestjs.io/), [Testing Library](https://testing-library.com/), [Husky](https://typicode.github.io/husky/#/), [Webpack](https://webpack.js.org/)

## Requirements

- [Node.js](https://nodejs.org/) v16 or newer

## Getting Started

[Clone](https://github.com/joshesp/react-app-starter-template.git) it and install project dependencies

```bash
$ git clone https://github.com/joshesp/react-app-starter-template.git
$ cd ./react-app-starter-template.git
$ npm i
$ npm run dev
```
The app runs in [http://localhost:3000](http://localhost:3000). You can change this configuration in **webpack.dev.ts** file.  

```javascript
devServer: {
	port: 3000,
        ...
},
```

## Scripts

- `npm rund dev` — Launches the app in development mode on [`http://localhost:3000`](http://localhost:3000/).
- `npm rund build` — Compiles and bundles the app for deployment.
- `npm run lint` — Validate the code using ESLint.
- `npm run lint:fix` — Fixed the code using ESLint and Prettier.
- `npm run test` — Run unit tests with Jest.
- `npm run check` — Run unit tests and build before pushing to the repo.


## License

Copyright © 2022-present Josué. This source code is licensed under the MIT license found in the [LICENSE](./LICENSE) file.