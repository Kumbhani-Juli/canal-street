import React from "react";
import foodimg from "../assets/images/food-image.avif";
import leftemoji from "../assets/images/food-left-emoji.svg";
import rightemoji from "../assets/images/food-right-emoji.svg";
import Footer from "./Footer";
const Food = () => {
	const foodData = [
		{
			title: "Khao Man Gai",
			content: "Betong",
		},
		{
			title: "Coffee, Pastries & Smoothies",
			content: "Chinatown Deli",
		},
		{
			title: "Artisanal Chocolates",
			content: "Daniel Corpuz Chocolatier",
		},
		{
			title: "Chinese Classics",
			content: "Joe's Rice and Noodles",
		},
		{
			title: "Cantonese Steamed Rice Rolls",
			content: "Joe's Steam Rice Roll",
		},
		{
			title: "Delicious Filipino Classics",
			content: "Kabisera",
		},
		{
			title: "Bingsoo Sundaes & Bubble Tea",
			content: "Lazy Sundaes",
		},
		{
			title: "Sushi, Handrolls & Chirashi",
			content: "Mastunori",
		},
		{
			title: "Filipino Inspired Taqueria",
			content: "Mucho Sarap",
		},
	];
	return (
		<>
			<div className="bg-blue-500 w-full food-container pt-80 px-20 overflow-auto ">
				<div className="flex flex-wrap justify-between">
					<div className="w-7/12">
						{" "}
						<h1 className=" font-serif text-9xl food-title">The Food Hall</h1>
					</div>
					<div className="relative text-right ">
						<img src={foodimg} className="max-w-96 " />
						<span className="absolute top-[-40px] right-[-60px] z-10 text-6xl">
							餐饮
						</span>
						<p className="absolute top-[-150px] right-[-30px] text-right font-mono	font-medium">
							Food Hall Hours:
							<br />
							Mon – Sun: 11:00AM - 8:00PM
						</p>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-10 mt-20 gap-y-24">
					{foodData?.map((item, index) => (
						<div key={index}>
							<p className="font-serif text-xl mb-6">{item?.title}</p>
							<h2 className="font-serif text-3xl font-mono">{item?.content}</h2>
						</div>
					))}
				</div>
				<div className="flex justify-between single-announcement mt-20">
					<div className="">
						<img src={leftemoji} className="h-52 leftemoji" />
					</div>
					<div className="w-96 text-center ">
						<h1 className="text-8xl mb-10 ">The Best of NYC</h1>
						<p className="font-mono text-2xl">All under one roof!</p>
					</div>
					<div className="">
						{" "}
						<img src={rightemoji} className=" h-52 rightemoji" />
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Food;
