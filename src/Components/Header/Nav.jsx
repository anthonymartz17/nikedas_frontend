import React, { useState, useEffect } from "react";
import "./Nav.css";
import SearchProduct from "../Header/SearchProduct";
import NavDesktop from "../Header/NavDesktop";
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
			<div className="navbar_mobile">
				<div className="navbar_logo">NIKEDAS</div>
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
			<div className="navbar_desktop">
				<div className="navbar_desktop_top">
					<div className="auth">
						<span>Login</span>
						<span>Join Us</span>
					</div>
				</div>
				<div className="navbar_desktop_bottom">
					<div className="navbar_logo">NIKEDAS</div>
					<NavDesktop />
					<input
						className="search_searchbar"
						type="text"
						placeholder="Search"
					/>
					<div className="shopping_cart">
						<span className="material-symbols-outlined">local_mall</span>
					</div>
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
