import React, { useState } from "react";
//create your first component
export function TrafficLight() {
	const [color, setColor] = useState("red");

	return (
		<div className="container ligths">
			<div className="row justify-content-center">
				<div
					className={`lights col-auto ${color == "red" &&
						"light-shadow"}`}
					id="red"
					style={{ opacity: color == "red" ? 1 : 0.5 }}
					onClick={e => setColor("red")}

					// var new ={ ...color};
					// let newColor ={...new[0]};
					// newColor.boxShadow="0px 0px 9px 4px #747DE8";
					// new[0] = newColor;
					// setColor({new});
					// // // "0px 0px 9px 4px #747DE8";
					// // setColor(color[0].boxShadow, newColor);
					// // //alert(color[0].borderColor);
					// // setColor((color[1].borderColor = ""));
					// // setColor((color[2].borderColor = ""));
				/>
			</div>

			<div className="row justify-content-center">
				<div
					className={`lights col-auto ${color == "yellow" &&
						"light-shadow"}`}
					style={{ opacity: color == "yellow" ? 1 : 0.5 }}
					onClick={e => setColor("yellow")}
					id="yellow"
				/>
			</div>

			<div className="row justify-content-center">
				<div
					className={`lights col-auto ${color == "green" &&
						"light-shadow"}`}
					style={{ opacity: color == "green" ? 1 : 0.5 }}
					onClick={e => setColor("green")}
					id="green"
				/>
			</div>
		</div>
	);
}
