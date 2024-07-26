import React from "react";
import shoeList from "../assets/shoes_db";
import ShoeCard from "../Components/ShoesDisplay/ShoeCard";
import "./Shoes.css";
import { useState } from "react";
import Subcategories from "../Components/ShoesDisplay/Subcategories";
import ShoeFilters from "../Components/ShoesDisplay/ShoeFilters";
import Accordion from "../Components/UI/Accordion";

export default function Shoes() {
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	function toggleFilter() {
		setIsFilterOpen((prev) => !prev);
		document.body.classList.toggle("no_scroll");
	}

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
				{shoeList.map((shoe) => (
					<ShoeCard shoe={shoe} key={shoe.id} />
				))}
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
