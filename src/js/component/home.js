import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from "./NavBar.js";
import { Jumbotron } from "./Jumbotron.js";
import { Cards } from "./Cards.js";
import { Footer } from "./Footer.js";

export function Home() {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	);
}

ReactDOM.render(<Home />, document.querySelector("#app"));
