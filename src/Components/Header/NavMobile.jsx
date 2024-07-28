import "./NavMobile.css";
import { Link } from "react-router-dom";

import categories from "./navigation";
import { useAuth } from "../../Context/AuthContext";
export default function NavMobile({ onToggleMenu }) {
	const { currentUser } = useAuth();
	console.log(currentUser,'hay?')
	return (
		<div className="nav_mobile poppins-light">
			<div className="navbar_mobile_menu_header justify-end">
				{/* <span className="navbar_mobile_menu_back">back</span> */}
				<span onClick={onToggleMenu} className="material-symbols-outlined ">
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
				<Link
					to="/auth/signup"
					className="btn btn_bg_light"
					onClick={() => onToggleMenu()}
				>
					Join Us
				</Link>
				<Link
					to="/auth"
					className="btn btn_mute_light"
					onClick={() => onToggleMenu()}
				>
					Log In
				</Link>
			</div>
		</div>
	);
}
