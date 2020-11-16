import React from "react";
import "../../styles/Card.css";

function Card() {
	return (
		<div className="Card">
			<div className="card-body">
				<img
					className="card-img-top"
					src="https://placehold.it/500x300/555/fff"
					alt="image"
				/>
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquid ex ea commodi consequat.
				</p>
				<a href="#" className="btn btn-primary btnCard">
					Find Out More!
				</a>
			</div>
		</div>
	);
}

export default Card;
