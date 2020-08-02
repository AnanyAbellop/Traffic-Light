import React from "react";

//create your first component
export function TrafficLight() {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="lights col-auto">
					<input id="red" type="radio" />
				</div>
			</div>

			<div className="row justify-content-center">
				<div className="lights col-auto">
					<input id="yellow" type="radio" />
				</div>
			</div>

			<div className="row justify-content-center">
				<div className="lights col-auto">
					<input id="green" type="radio" />
				</div>
			</div>
		</div>
	);
}
