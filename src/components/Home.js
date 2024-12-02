import React from "react";
import headerlogo from "../assets/images/home-logo.svg";
import home_img from "../assets/images/home-image.avif";

const Home = () => {
	return (
		<>
			<div className="home-container pt-20 ">
				<div className="px-20">
					<img src={headerlogo} alt="headerlogo" className="fixed" />
					<div className="header-title">
						<h1 className="text-7xl w-7/12 pt-60 font-ogg leading-tight">
							Canal Street Market is a carefully curated retail market, food
							hall & community space open year-round at 265 Canal Street.{" "}
							<span>Support Small Business </span>this weekend!
						</h1>
					</div>{" "}
				</div>
				<div className="mt-20 home-img-container">
					<img src={home_img} />
				</div>
			</div>
		</>
	);
};

export default Home;
