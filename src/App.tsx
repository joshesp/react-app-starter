import React from "react"
import "./App.scss"
import { APP_TITLE } from "./constants/environment"

const App = () => {
	return (
		<div className="app">
			<h1 className="title-app">{APP_TITLE}</h1>
		</div>
	)
}

export default App
