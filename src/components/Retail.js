import React from "react";
import retail from "../assets/images/retail.avif";
import leftemoji from "../assets/images/retail_left_flower.svg";
import rightemoji from "../assets/images/retail_right_flower.svg";
import Footer from "./Footer";
const Food = () => {
	const foodData = [
		{
			title: "Design Objects",
			content: "American Design Club",
		},
		{
			title: "Jewelry",
			content: "Beeshaus & Raum NYC",
		},
		{
			title: "Jewelry",
			content: "Beroep Tech",
		},
		{
			title: "Bonsai Shop",
			content: "Dandy Farmer Bonsai Shop",
		},
		{
			title: "Fashion Apparel",
			content: "Friend Of A Friend Studio",
		},
		{
			title: "Design Objects",
			content: "Leibal",
		},
		{
			title: "K Pop Apparel and Merchandise",
			content: "Mandu Apparel",
		},
		{
			title: "Home Goods",
			content: "Mogutable",
		},
		{
			title: "Jewelry",
			content: "Mottive",
		},
		{
			title: "Newstand and Magazines",
			content: "Office Magazine Newstand",
		},
		{
			title: "Fashion Apparel",
			content: "Preppy Trendy",
		},
		{
			title: "Sunglasses",
			content: "Savage Anchor",
		},
		{
			title: "Jewelry",
			content: "Seven 50",
		},
		{
			title: "Sustainable lifestyle store",
			content: "Siizu",
		},
		{
			title: "Jewelry",
			content: "Swagychic",
		},
	];
	return (
		<>
			<div className="bg-red-500 w-full food-container pt-80 px-20 overflow-auto ">
				<div className="flex flex-wrap justify-between">
					<div className="w-7/12">
						{" "}
						<h1 className=" font-serif text-9xl food-title">
							The Retail Market
						</h1>
					</div>
					<div className="relative text-right ">
						<img src={retail} className="max-w-96 " />
						<span className="absolute top-[-40px] right-[-60px] z-10 text-6xl">
							餐饮
						</span>
						<p className="absolute top-[-150px] right-[-30px] text-right font-mono	font-medium">
							Retail Market Hours:
							<br />
							Thurs – Sun: 11:00AM - 7:00PM
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
