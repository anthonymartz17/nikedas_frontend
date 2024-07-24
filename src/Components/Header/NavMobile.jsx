import "./NavMobile.css";

import categories from "./navigation";

export default function NavMobile({ onToggleMenu }) {
	return (
		<div className="nav_mobile poppins-light">
			<div className="navbar_mobile_menu_header">
				<span className="navbar_mobile_menu_back">back</span>
				<span onClick={onToggleMenu} className="material-symbols-outlined">
					close
				</span>
			</div>
			<div>
				<ul className="links">
					{categories.map((cat, idx) => (
						<li key={idx} className="link_item">
							<span>{cat.category}</span>
							<span className="material-symbols-outlined">
								arrow_forward_ios
							</span>
						</li>
					))}
				</ul>
			</div>
			<div className="navbar_footer">
				<button className="btn btn_bg_light">Join Us</button>
				<button className="btn btn_mute_light">Log in</button>
			</div>
		</div>
	);
}
