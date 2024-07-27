import React from "react";
import { Outlet } from "react-router-dom";
import PopUpModal from "../Components/UI/PopUpModal";
export default function Account() {
	return (
		<div>
			<Outlet />
			<PopUpModal />
		</div>
	);
}
