import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Header/Nav.jsx";
import Footer from "../Components/Footer/Footer.jsx";

export default function RootLayout() {
	return (
		<div>
			<header>
				<Nav />
			</header>
			<main>
				<Outlet></Outlet>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}
