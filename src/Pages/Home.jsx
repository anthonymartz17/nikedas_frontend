import React from "react";
import Hero from "../Components/Home/Hero.jsx";
import CarouselDisplay from "../Components/Home/CarouselDisplay.jsx";
import "./Home.css";
export default function Home() {
	return (
		<div className="home">
			<Hero />
			<CarouselDisplay />
		</div>
	);
}
