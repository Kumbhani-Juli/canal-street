import React from "react";
import foodimg from "../assets/images/food-image.avif";
const Food = () => {
	return (
		<>
			<div className="bg-blue-500 max-w-7xl food-container">
				<div className="grid grid-cols-2">
					<div>
						{" "}
						<h1 className="text-9xl">The Food Hall</h1>
					</div>
					<div>
						<img src={foodimg} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Food;
