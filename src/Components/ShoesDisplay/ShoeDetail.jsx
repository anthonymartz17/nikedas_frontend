import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ShoeDetail.css";
import { capitalizeFirstLetters } from "../../Utils/strings.utils";
import { fetchShoeById } from "../../Services/shoes.services";

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
	const { id } = useParams();
	const [shoe, setShoe] = useState(null);
	const [currentImg, setCurrentImg] = useState("");
	const [shoeBrandModel, setShoeBrandModel] = useState("");
	const [shoeDescription, setShoeDescription] = useState("");
	async function setShoeInfo(id) {
		try {
			const selectedShoe = await fetchShoeById(id);
			if (selectedShoe) {
				setShoe(selectedShoe);
				setCurrentImg(selectedShoe.primary_img);
				setShoeBrandModel(
					capitalizeFirstLetters(`${selectedShoe.brand} ${selectedShoe.model}`)
				);
				setShoeDescription(
					capitalizeFirstLetters(
						`${selectedShoe.gender}'s ${selectedShoe.description}`
					)
				);
			}
		} catch (error) {
			//handle error properly
			throw error;
		}
	}
	useEffect(() => {
		setShoeInfo(id);
	}, [id]);

	if (!shoe) return <div>Loading...</div>;

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
					<img src={currentImg} alt={`photo of ${shoe.brand} shoe`} />
				</div>
				<div className="shoe_display_collage">
					<ul className="shoe_display_collage_list">
						{shoe.secondary_img.map((img, idx) => (
							<li
								onClick={() => setCurrentImg(img)}
								className="shoe_display_collage_list_item cur"
								key={idx}
							>
								<img src={img} alt={`photo of ${shoe.brand} shoe`} />
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="shoe_sizes">
				<p className="poppins-semibold">Select Size</p>
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
