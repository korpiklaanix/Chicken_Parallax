import { useState, useEffect } from "react";
import "./ChickenParallax.css";
import chicken from "../assets/chicken.png";
import fence from "../assets/fence.png";
import grass from "../assets/grass.png";
import leafL from "../assets/leafL.png";
import leafR from "../assets/leafR.png";
import coop from "../assets/coop.png";

function ChickenParallax() {
	const [offsetY, setOffsetY] = useState(0);

	const handleScroll = () => {
		setOffsetY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		// <>
		<header>
			<nav>
				<h2>Logo</h2>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Service</li>
					<li>Contact</li>
				</ul>
			</nav>
			<div className="parallaxContainer">
				<img
					className="parallaxLayer  layer-bottom"
					src={fence}
					alt=""
					style={{ transform: `translateX(${offsetY * -0.2}px)` }}
				/>
				{/* <h1></h1> */}
				<img className="parallaxLayer  layer-bottom" src={grass} alt="" />
				<img className="parallaxLayer layer-center" src={coop} alt="" />
				<img
					className="parallaxLayer chicken"
					src={chicken}
					alt=""
					style={{ transform: `translateY(${offsetY * 0.4}px)` }}
				/>
				<img
					className="parallaxLayer layer-left"
					src={leafL}
					alt=""
					style={{ transform: `translateX(${offsetY * -0.2}px)` }}
				/>
				<img
					className="parallaxLayer layer-right"
					src={leafR}
					alt=""
					style={{ transform: `translateX(${offsetY * 0.2}px)` }}
				/>
			</div>
		</header>
		// </>
	);
}

export default ChickenParallax;
