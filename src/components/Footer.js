import React from "react";
import pencil from "../assets/images/footer-pencil.svg";
import facebook from "../assets/images/footer-facebook.svg";
import instagram from "../assets/images/footer-instagram.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
	return (
		<>
			<div className="footer-container mt-32 mb-8">
				<div className=" footer-title">
					<div className="flex  flex-col items-center footer-title-content">
						<h1 className="text-4xl mb-5">Interested in becoming a vendor?</h1>
						<button className="border border-black px-6 py-2 font-mono">
							click here
						</button>
					</div>
				</div>
				<div className="flex justify-between items-center footer-icons mt-20 font-mono">
					<div className="border-4 border-dashed border-black px-32 py-20 flex items-center flex-col hover:border-gradient">
						<img src={pencil} className="mb-4" />
						<p>Follow us on Email us</p>
					</div>
					<div className="border-4 border-dashed border-black px-32 py-20 flex items-center flex-col hover:border-gradient">
						<img src={facebook} className="mb-4" />
						<p>Follow us on facebook</p>
					</div>
					<div className="border-4 border-dashed border-black px-32 py-20 flex items-center flex-col hover:border-gradient">
						<img src={instagram} className="mb-4" />
						<p>Follow us on instagram</p>
					</div>
				</div>
				<div className="flex mt-20 p-10 justify-between border-2 border-dashed border-black font-mono relative">
					<h1 className="text-xl">Stay up to date with our newsletter</h1>
					<input
						type="text"
						placeholder="  Email"
						className="border border-black px-4 py-2 bg-transparent placeholder-black w-4/12"
					/>{" "}
					<FontAwesomeIcon
						icon={faAngleRight}
						className="absolute bottom-14 right-11 text-black mr-4"
					/>
				</div>
				<div className="flex mt-10 justify-between text-lg font-mono font-bold ">
					<p>Copyright Canal Street Market 2024</p>
					<p className="underline ">Privacy policy</p>
					<p className="underline">Vendor login</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
