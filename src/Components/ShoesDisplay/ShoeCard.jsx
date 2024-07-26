import React from "react";
import "./ShoeCard.css";
export default function ShoeCard({ shoe }) {
	return (
		<div className="shoe_card ">
			<div className="shoe_img_container">
				<img src={shoe.primary_img} alt="" />
			</div>
			<div className="shoe_description poppins-light">
				<div>
					<h5 className="poppins-semibold">{`${shoe.brand} ${shoe.model}`}</h5>
					<p>{shoe.gender}'s shoe</p>
				</div>
				<p>{shoe.description}</p>
				<p className="poppins-semibold">${shoe.price}</p>
			</div>
		</div>
	);
}
