import React from "react";
import { Outlet } from "react-router-dom";
import "../Components/Login/Auth.css";
export default function Auth() {
	return (
		<div className="authentication_page ">
			<Outlet />
		</div>
	);
}
