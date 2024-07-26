import React from "react";
import "./ShoeDetail.css";
import shoesList from "../../assets/shoes_db";
import { capitalizeFirstLetters } from "../../Utils/strings.utils";

const shoe = shoesList[0];
const shoeSizes = [
	"5",
	"5.5",
	"6",
	"6.5",
	"7",
	"7.5",
	"8",
	"8.5",
	"9",
	"9.5",
	"10",
	"10.5",
	"11",
	"11.5",
	"12",
	"12.5",
	"13",
	"13.5",
	"14",
];

export default function ShoeDetail() {
	const shoeBrandModel = capitalizeFirstLetters(`${shoe.brand} ${shoe.model}`);
	const shoeDescription = capitalizeFirstLetters(
		`${shoe.gender}'s ${shoe.description}`
	);
	return (
		<div className="shoe_detail">
			<div className="shoe_description">
				<div>
					<h5 className="poppins-semibold">{shoeBrandModel}</h5>
					<p>{shoeDescription}</p>
				</div>
				<p className="poppins-semibold">${shoe.price}</p>
			</div>
			<div className="shoe_display">
				<div className="shoe_display_main">
					<img src={shoe.primary_img} alt={`photo of ${shoe.brand} shoe`} />
				</div>
				<div className="shoe_display_collage">
					<ul className="shoe_display_collage_list">
						{shoe.secondary_img.map((img, idx) => (
							<li className="shoe_display_collage_list_item" key={idx}>
								<img src={img} alt={`photo of ${shoe.brand} shoe`} />
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="shoe_sizes">
				<p className=" poppins-semibold">Select Size</p>
				<ul className="shoe_sizes_list">
					{shoeSizes.map((size, idx) => (
						<li className="shoe_sizes_list_item" key={idx}>
							<button className="btn btn_mute_dark">{size}</button>
						</li>
					))}
				</ul>
			</div>
			<div className="shoes_action_btn">
				<button className="btn btn_bg_dark">Add To Bag</button>
			</div>
		</div>
	);
}
