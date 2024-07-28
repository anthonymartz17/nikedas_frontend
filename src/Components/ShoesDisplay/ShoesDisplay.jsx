import React, { useEffect } from "react";
import ShoeCard from "../ShoesDisplay/ShoeCard";
import "./ShoesDisplay.css";
import { useState } from "react";
import Subcategories from "../ShoesDisplay/Subcategories";
import ShoeFilters from "../ShoesDisplay/ShoeFilters";
import Accordion from "../UI/Accordion";
import { fetchAllShoes } from "../../Services/shoes.services";

export default function Shoes() {
	const [shoesList, setShoesList] = useState([]);
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	function toggleFilter() {
		setIsFilterOpen((prev) => !prev);
		document.body.classList.toggle("no_scroll");
	}

	async function getAllShoes() {
		try {
			const shoesData = await fetchAllShoes();
			setShoesList(shoesData);
		} catch (error) {
			//handle error
		}
	}

	useEffect(() => {
		getAllShoes();
	}, []);

	return (
		<div className="shoes">
			<div className="topbar">
				<h4 className="shoes_subtitle poppins-semibold">Category</h4>
				<div className="shoes_controls_mobile poppins-regular">
					<span className="shoes_filter_icon" onClick={() => toggleFilter()}>
						Filters <span className="material-symbols-outlined">tune</span>
					</span>
				</div>
			</div>

			<div className="sidebar">
				<Subcategories />
				<Accordion />
			</div>

			<div className="shoes_display_area">
				{shoesList.length > 0 ? (
					shoesList.map((shoe) => <ShoeCard shoe={shoe} key={shoe.id} />)
				) : (
					<p>no shoes available</p>
				)}
			</div>

			<div
				className={`navbar_search_product_mobile ${
					isFilterOpen ? "active" : ""
				}`}
			>
				<div className="shoes_mobile_filter_header">
					<h4 className=" poppins-regular">Filter</h4>
					<span onClick={toggleFilter} className="material-symbols-outlined">
						close
					</span>
				</div>
				<ShoeFilters />
			</div>
		</div>
	);
}
