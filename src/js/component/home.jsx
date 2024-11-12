import React, { useState } from "react";

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("");
	return (
		<div className="d-flex justify-content-center p-4">
			<div className="traffic">
				<div onClick={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
				<div onClick={() => setSelectedColor("yellow")} className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
				<div onClick={() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glow" : "")}></div>
			</div>
		</div>
	);
};

export default Home;
