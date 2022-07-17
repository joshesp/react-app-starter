import React from "react"
import "./App.scss"
import Logo from "./assets/images/workflow.svg"
import { APP_TITLE } from "./constants/environment"

const App = () => {
	return (
		<div className="app">
			<img src={Logo} alt={APP_TITLE} width="60" />
			<h1 className="title-app">{APP_TITLE}</h1>
		</div>
	)
}

export default App
