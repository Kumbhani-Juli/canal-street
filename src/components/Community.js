import React from "react";
import feature from "../assets/images/feature1.avif";
import feature2 from "../assets/images/feature2.avif";
import feature3 from "../assets/images/feature3.avif";
import feature4 from "../assets/images/feature4.avif";
import Footer from "./Footer";
import leftemoji from "../assets/images/leftcommunity.svg";
import rightemoji from "../assets/images/rightcommunity.svg";

const Community = () => {
	const features = [
		{ title: "CSM Community - AMDC", imagePath: feature },
		{ title: "CSM Community - Joe's Steam Rice Rolls", imagePath: feature2 },
		{ title: "CSM Community - Bereop Tech", imagePath: feature3 },
		{ title: "CSM Community - Izakaya", imagePath: feature4 },
	];
	return (
		<>
			<div className="bg-yellow-500 w-full food-container pt-80 px-20 overflow-auto community-container">
				{" "}
				<div className="flex flex-wrap justify-between">
					<div className="w-7/12">
						{" "}
						<h1 className=" font-serif text-9xl food-title">
							Canal St. Community
						</h1>
					</div>
					<div className=" relative text-right">
						<span className=" text-6xl">文化</span>
						<p className="absolute top-[-200px] right-[-30px] font-mono	font-medium w-[32rem]">
							Our mixed-use space hosts
							<br /> ongoing events, podcasts <br /> & artists in residence
						</p>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-40 mt-44 font-mono text-center single-events__item_bottom pb-0">
					<div className="">
						<div className="single-events__item">
							<span>09/21 (past)</span>
							<h2 className="text-lg">Small Business Retail Pop Up Weekend!</h2>
						</div>
						<div className="single-events__item">
							<span>12/11 (past)</span>
							<h2 className="text-lg">Hack City 12/11</h2>
						</div>
					</div>
					<div className="single-events__item">
						<h1 className="text-8xl">Market Events</h1>
					</div>
					<div>
						<div className="single-events__item">
							<span>02/07 (past)</span>
							<h2 className="text-lg">
								New Balance x Paperboy Paris by Greenhouse @ Canal Street Market
							</h2>
						</div>
						<div className="single-events__item">
							<span>07/27 (past)</span>
							<h2 className="text-lg">Taiwanese Wave</h2>
						</div>
					</div>
				</div>{" "}
				<div className="w-full text-center border border-black py-4 mt-8 hover:bg-black hover:text-white">
					View All
				</div>
				<div className="my-16 single_feature">
					<h1 className="text-7xl mb-7">Features</h1>
					<div className="grid grid-cols-2 gap-14 gap-y-28">
						{features.map((feature, index) => (
							<div key={index} className="relative featureimg">
								<img
									src={feature.imagePath}
									alt={feature.title}
									className="w-full h-full object-cover"
								/>
								<h1 className="absolute bg-white p-6 text-5xl bottom-[-50px]">
									{feature.title}
								</h1>
							</div>
						))}
					</div>
				</div>
				<div className="w-full text-center border border-black py-4 my-20 hover:bg-black hover:text-white">
					view all stories
				</div>{" "}
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
						<img src={rightemoji} className=" h-52 rightemojicommunity" />
					</div>
				</div>
				<div className="grid grid-cols-3 gap-8 text-center mt-20  single-radio__row">
					<div>
						<span>11/19</span>
						<p>S4E19: Asian Layoff Friends</p>
					</div>{" "}
					<div>
						<span>11/19</span>
						<p>S4E19: Asian Layoff Friends</p>
					</div>
					<div>
						<span>11/19</span>
						<p>S4E19: Asian Layoff Friends</p>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Community;
