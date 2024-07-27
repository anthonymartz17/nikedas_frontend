import React from "react";
import promo1 from "../../assets/promotions/flyer_1.png";
import promo2 from "../../assets/promotions/flyer_2.png";
import promo3 from "../../assets/promotions/flyer_3.png";
import promo4 from "../../assets/promotions/flyer_4.png";
import promo5 from "../../assets/promotions/flyer_5.png";
import Carousel from "./Carousel";
import "./CarouselDisplay.css";

const carouselImages = [promo1, promo2, promo3, promo4, promo5];

export default function CarouselDisplay() {
	return (
		<div className="carousel">
			<h3 className="carousel_subtitle poppins-bold">New Arrivals</h3>
			<Carousel autoSlide={false} autoSlideInterval={3000}>
				{carouselImages.map((img, idx) => (
					<img
						key={idx}
						src={img}
						className="w-full h-56 object-cover md:h-96"
						alt={`Slide ${idx + 1}`}
					/>
				))}
			</Carousel>
		</div>
	);
}
