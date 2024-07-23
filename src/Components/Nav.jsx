import React, { useState } from "react";
import "./Nav.css";
import SearchProduct from "./SearchProduct";
export default function Nav() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	function toggleSearch() {
		setIsSearchOpen((prev) => !prev);
	}
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	function toggleMenu() {
		setIsMenuOpen((prev) => !prev);
	}
	return (
		<nav className="navbar">
			<div className="navbar_container">
				<div className="navbar_logo">NIKEDAS</div>
				<div className="navbar_search_icon_menu_icon_container">
					<span
						onClick={() => toggleSearch()}
						className=" navbar_searchbar material-symbols-outlined"
					>
						search
					</span>
					<span
						onClick={() => toggleMenu()}
						className="material-symbols-outlined nav_menu_icon"
					>
						menu
					</span>
				</div>
			</div>

			<div className={`navbar_mobile_menu ${isMenuOpen ? "active" : ""}`}>
				<div className="navbar_mobile_menu_header">
					<span className="navbar_mobile_menu_back">back</span>
					<span
						onClick={() => toggleMenu()}
						className="material-symbols-outlined "
					>
						close
					</span>
				</div>
			</div>
			<div
				onClick={() => toggleMenu()}
				className={`navbar_mobile_menu_backdrop ${
					isMenuOpen ? "active" : ""
				}`}
			></div>

			{/* <div
				className={`navbar_search_product_mobile${
					isSearchOpen ? "active" : ""
				}`}
			> */}
			{/* <div className="navbar_search_product_mobile">
				<SearchProduct />
			</div> */}
		</nav>
	);
}
