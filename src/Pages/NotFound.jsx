import React from "react";
import notFoundImg from "../assets/404.png";
import "./NotFound.css";
import { Link } from "react-router-dom";
export default function NotFound() {
	return (
		<div className="notFound">
			<div className="notFound_content">
				<img src={notFoundImg} alt="" />

				<Link to="/shoes" className="btn btn_bg_dark w-fit">
					Back to Site
				</Link>
			</div>
		</div>
	);
}
