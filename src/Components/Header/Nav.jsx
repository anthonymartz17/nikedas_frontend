import "./Nav.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import SearchProduct from "../Header/SearchProduct";
import NavMobile from "./NavMobile";

export default function Nav() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function toggleSearch() {
		setIsSearchOpen((prev) => !prev);
	}

	function toggleMenu() {
		setIsMenuOpen((prev) => !prev);
	}
	useEffect(() => {
		document.body.classList.toggle("no_scroll");
	}, [isMenuOpen, isSearchOpen]);

	return (
		<nav className="navbar">
			<div className="navbar_container">
				<Link to="/" className="navbar_logo">NIKEDAS</Link>
				<div className="navbar_search_icon_menu_icon_container">
					<span
						onClick={toggleSearch}
						className="navbar_searchbar material-symbols-outlined"
					>
						search
					</span>
					<span
						onClick={toggleMenu}
						className="material-symbols-outlined nav_menu_icon"
					>
						menu
					</span>
				</div>
			</div>

			<div className={`navbar_mobile_menu ${isMenuOpen ? "active" : ""}`}>
				<NavMobile onToggleMenu={toggleMenu} />
			</div>

			<div
				onClick={toggleMenu}
				className={`navbar_mobile_menu_backdrop ${isMenuOpen ? "active" : ""}`}
			></div>

			<div
				className={`navbar_search_product_mobile ${
					isSearchOpen ? "active" : ""
				}`}
			>
				<SearchProduct onToggleSearch={toggleSearch} />
			</div>
		</nav>
	);
}
