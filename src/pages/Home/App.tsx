import React from "react";
import { logo } from "assets";
import "./App.css";
import { NavLink } from "react-router-dom";
import { TodoConstants } from "constant";

function App() {

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Test</p>
				<div>
					<NavLink to={TodoConstants.TODO} className="App-link">
						Todo
					</NavLink>
					&nbsp;
					<NavLink to="/counter" className="App-link">
						Counter
					</NavLink>
				</div>
			</header>
		</div>
	);
}

export default App;
