import React from "react";
import "./ShoeCard.css";
import { Link } from "react-router-dom";
export default function ShoeCard({ shoe }) {
	return (
		<Link to={`/shoes/${shoe.id}`} className="shoe_card_link">
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
		</Link>
	);
}
