import "./NavMobile.css";
import { Link, useNavigate } from "react-router-dom";

import categories from "./navigation";
import { useAuth } from "../../Context/AuthContext";
export default function NavMobile({ onToggleMenu }) {
	const navigate = useNavigate();
	const { currentUser, logout } = useAuth();
	console.log(currentUser.email);
	async function handleLogout() {
		logout();
		onToggleMenu();
		navigate("/auth");
	}
	return (
		<div className="nav_mobile poppins-light">
			<div
				className={`navbar_mobile_menu_header  ${
					currentUser ? "justify-between" : "justify-end"
				}`}
			>
				<span className="navbar_mobile_menu_back">
					<span class="material-symbols-outlined">person</span>{" "}
					<span className="text-xs">{currentUser.email}</span>
				</span>
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

			{currentUser ? (
				<div className="navbar_footer">
					<ul className="links">
						<Link to="/">
							<li onClick={() => onToggleMenu()} className="link_item">
								<span>Nikedas</span>
								<span className="material-symbols-outlined">team_dashboard</span>
							</li>
						</Link>
						<Link to="/account">
							<li onClick={() => onToggleMenu()} className="link_item">
								<span>Dashboard</span>
								<span className="material-symbols-outlined">bar_chart_4_bars</span>
							</li>
						</Link>
						<Link to="/account/profile">
							<li onClick={() => onToggleMenu()} className="link_item">
								<span>Profile</span>
								<span className="material-symbols-outlined">person</span>
							</li>
						</Link>

						<li onClick={() => handleLogout()} className="link_item">
							<span>log out</span>
							<span className="material-symbols-outlined">logout</span>
						</li>
					</ul>
				</div>
			) : (
				<div className="navbar_footer navbar_footer_logout">
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
			)}
		</div>
	);
}
