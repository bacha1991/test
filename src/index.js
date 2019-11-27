import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import AppWrapper from "./AppWrapper";
import { loadGapi, authorizeToGapi } from './gapiModule';

import "./styles.css";

const App = () => {
	const [googleApiLoaded, updateGoogleApiLoaded] = useState();

	useEffect(() => {
		loadGapi()
			.then(authorizeToGapi)
			.then(() => updateGoogleApiLoaded(true));
	}, []);

	return (
		<div className="App">
			{
				googleApiLoaded ? <AppWrapper /> : <div>Loading...</div>
			}
		</div>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
