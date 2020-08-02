import React from "react";

//create your first component
export function TrafficLight() {
	return (
		<div className="row">
			<div className="lights col-auto">
				<input id="red" type="radio" />
				<input id="yellow" type="radio" />
				<input id="green" type="radio" />
			</div>
		</div>
	);
}
