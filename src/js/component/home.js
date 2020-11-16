import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
//include images into your bundle

import Card from "./Card.jsx";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="d-flex justify-content-center">
				<Jumbotron />
			</div>

			<div className="row d-flex justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</div>
	);
}
