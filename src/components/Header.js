import React, { useState } from "react";
import Food from "./Food";
import Retail from "./Retail";
import Community from "./Community";

const Header = () => {
	const [active, setActive] = useState(null);
	return (
		<div className="fixed top-0 right-0 h-full w-11/12 flex justify-end ">
			{/* Food Section */}
			<div
				className={`bg-blue-500 h-full w-14 flex relative justify-center  items-center cursor-pointer ${
					active === "food" && "hidden"
				}`}
				onClick={() => setActive("food")}
			>
				<p className="absolute top-20 font-semibold">餐饮</p>
				<p className="text-black text-lg font-semibold rotate-90 text-10 tracking-wider">
					Food
				</p>
			</div>
			{active === "food" && <Food />}
			{/* Retail Section */}
			<div
				className={`bg-red-500 h-full w-14 flex relative justify-center items-center cursor-pointer ${
					active === "retail" && "hidden"
				}`}
				onClick={() => setActive("retail")}
			>
				<p className="absolute top-20 font-semibold">購物</p>
				<p className="text-black text-lg font-semibold rotate-90 text-10 tracking-wider">
					Retail
				</p>
			</div>
			{active === "retail" && <Retail />}
			{/* Community Section */}
			<div
				className={`bg-yellow-500 h-full w-14 flex relative justify-center items-center cursor-pointer ${
					active === "community" && "hidden"
				}`}
				onClick={() => setActive("community")}
			>
				<p className="absolute top-20 font-semibold">文化</p>
				<p className="text-black text-lg font-semibold rotate-90 text-10 tracking-wider">
					Community
				</p>
			</div>{" "}
			{active === "community" && <Community />}
		</div>
	);
};

export default Header;
