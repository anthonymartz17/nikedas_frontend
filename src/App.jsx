import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Nav from "./Components/Nav.jsx";
import Footer from "./Components/Footer.jsx";

// Pages
import Home from "./Pages/Home.jsx";
import Auth from "./Pages/Auth.jsx";
import Shoes from "./Pages/Shoes.jsx";
import Shoe from "./Pages/Shoe.jsx";
import Account from "./Pages/Account.jsx";
import Profile from "./Pages/Profile.jsx";
import NewListing from "./Pages/NewListing.jsx";
import EditListing from "./Pages/EditListing.jsx";
import ShoeListing from "./Pages/ShoeListing.jsx";
import Seller from "./Pages/Seller.jsx";
import Store from "./Pages/Store.jsx";
import AboutSeller from "./Pages/AboutSeller.jsx";
import NotFound from "./Pages/NotFound.jsx";

function App() {
	return (
		<Router>
			<div className="layout">
				<header>
					<Nav />
				</header>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/auth" element={<Auth />} />

						<Route path="/shoes" element={<Shoes />}>
							<Route path=":id" element={<Shoe />} />
						</Route>

						<Route path="/account" element={<Account />}>
							<Route path="" element={<Account />} />
							<Route path="profile" element={<Profile />} />
							<Route path="listing/new" element={<NewListing />} />
							<Route path="listing/:id/edit" element={<EditListing />} />
							<Route path="listing/:id" element={<ShoeListing />} />
						</Route>

						<Route path="/seller/:id" element={<Seller />}>
							<Route path="" element={<Store />} />
							<Route path="about" element={<AboutSeller />} />
						</Route>

						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</Router>
	);
}

export default App;
