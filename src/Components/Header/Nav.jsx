import "./Nav.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchProduct from "../Header/SearchProduct";
import NavDesktop from "../Header/NavDesktop";
import NavMobile from "./NavMobile";
import logoFullLight from "../../assets/logos_nikeda/nikedas_light.png";
import logoFullDark from "../../assets/logos_nikeda/nikedas_dark.png";
import { useAuth } from "../../Context/AuthContext";

export default function Nav() {
	const { currentUser } = useAuth();
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
				<Link to="/" className="navbar_logo poppins-bold">
					<img
						className="nikedas_full_logo"
						src={logoFullLight}
						alt="nikedas_logo"
					/>
				</Link>

				<div className="navbar_search_icon_menu_icon_container ">
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
					{currentUser ? (
						<div className="auth_btn_container poppins-light ">
							<Link to="/account">
								<li className="link_item">
									<span>Dashboard</span>
								</li>
							</Link>
							<Link to="/account/profile">
								<li className="link_item">
									<span>Profile</span>
								</li>
							</Link>

							<li className="link_item">
								<span>log out</span>
							</li>
						</div>
					) : (
						<div className="auth_btn_container poppins-light ">
							<Link to="/auth">Login</Link>
							<Link to="/auth/signup">Join Us</Link>
						</div>
					)}
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
