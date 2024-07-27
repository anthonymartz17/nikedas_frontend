import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// update branch delete

// Components
import Nav from "./Components/Header/Nav.jsx";
import Footer from "./Components/Footer/Footer.jsx";

// Pages
import Home from "./Pages/Home.jsx";
import Auth from "./Pages/Auth.jsx";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Forgot from "./Pages/Forgot.jsx";
import Shoes from "./Pages/Shoes.jsx";
import Shoe from "./Pages/Shoe.jsx";
import Account from "./Pages/Account.jsx";
import Profile from "./Pages/Profile.jsx";
import NewListing from "./Pages/NewListing.jsx";
import EditListing from "./Pages/EditListing.jsx";
import ShoeListing from "./Pages/ShoeListing.jsx";
import ShoesDisplay from "./Components/ShoesDisplay/ShoesDisplay.jsx";
import Seller from "./Pages/Seller.jsx";
import Store from "./Pages/Store.jsx";
import AboutSeller from "./Pages/AboutSeller.jsx";
import NotFound from "./Pages/NotFound.jsx";
import AccountDashboard from "./Components/Account/AccountDashboard.jsx"

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
						<Route path="/auth" element={<Auth />}>
							<Route path="" element={<Login />} />
							<Route path="signup" element={<SignUp />} />
							<Route path="forgot" element={<Forgot />} />
						</Route>

						<Route path="/shoes" element={<Shoes />}>
							<Route path="" element={<ShoesDisplay />} />
							<Route path=":id" element={<Shoe />} />
						</Route>

						<Route path="/account" element={<Account />}>
							<Route path="" element={<AccountDashboard />} />
							<Route path="profile" element={<Profile />} />
							<Route path="listing/new" element={<NewListing />} />
							<Route path="listing/:id/edit" element={<EditListing />} />
							<Route path="listing/:id" element={<ShoeListing />} />
						</Route>

						<Route path="/seller" element={<Seller />}>
							<Route path="" element={<Seller />} />
							<Route path=":id" element={<Store />} />
							<Route path="about" element={<AboutSeller />} />
						</Route>

						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
