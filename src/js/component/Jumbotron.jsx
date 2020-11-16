import React from "react";
import "../../styles/Jumbotron.css";

function Jumbotron() {
	return (
		<div className="Jumbotron">
			<div className="container">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquid ex ea commodi consequat.{" "}
				</p>

				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Call to action!
					</a>
				</p>
			</div>
		</div>
	);
}

export default Jumbotron;
