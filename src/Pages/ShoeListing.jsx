import React, { useState } from "react";
import ShoeDetail from "../Components/ShoesDisplay/ShoeDetail";
import { Link } from "react-router-dom";
import "./ShoeListing.css";
export default function ShoeListing() {
	return (
		<div className="h-screen  shoeListing">
			<div className="flex justify-end w-full shoeListing_back_btn">
				<Link to="/account" className="btn_mute_dark px-3 py-1">
					Back
				</Link>
			</div>
			<div className="flex justify-center">
				<ShoeDetail />
			</div>
		</div>
	);
}
