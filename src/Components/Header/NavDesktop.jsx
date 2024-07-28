import categories from "./navigation";
import "./NavDesktop.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavDesktop() {
	const navigate = useNavigate();
	const dropdownRef = useRef(null);
	const [details, setDetails] = useState([]);
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);

	function showDropdown(idx) {
		setDetails(categories[idx].details);
		setIsDropdownVisible(true);
	}

	function hideDropdown() {
		setIsDropdownVisible(false);
	}

	function searchShoes() {
		navigate("/shoes");
		hideDropdown();
	}

	return (
		<div className="navigation_desktop poppins-light">
			<ul className="navigation_desktop_links">
				{categories.map(({ category }, idx) => (
					<li
						className="navigation_desktop_links_item"
						onMouseEnter={() => showDropdown(idx)}
						onMouseLeave={hideDropdown}
						key={idx}
					>
						<span className="navigation_desktop_links_item_text">
							{category}
						</span>
					</li>
				))}
			</ul>
			<div
				ref={dropdownRef}
				onMouseEnter={() => setIsDropdownVisible(true)}
				onMouseLeave={hideDropdown}
				className={`navigation_desktop_dropdown ${
					isDropdownVisible ? "visible" : ""
				}`}
			>
				<ul className="navigation_desktop_dropdown_list">
					{details.map((detail, idx) => (
						<div key={idx}>
							<h4 className="navigation_desktop_dropdown_title poppins-semibold">
								{detail.title}
							</h4>
							<ul className="navigation_desktop_dropdown_details poppins-light ">
								{detail.items.map((item, idx) => (
									<li
										onClick={() => searchShoes()}
										className="navigation_desktop_dropdown_details_item"
										key={idx}
									>
										{item.name}
									</li>
								))}
							</ul>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
}
