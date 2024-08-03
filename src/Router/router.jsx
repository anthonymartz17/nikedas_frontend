import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home.jsx";
import Auth from "../Pages/Auth.jsx";
import Login from "../Pages/Login.jsx";
import SignUp from "../Pages/SignUp.jsx";
import Forgot from "../Pages/Forgot.jsx";
import Shoes from "../Pages/Shoes.jsx";
import Shoe from "../Pages/Shoe.jsx";
import Account from "../Pages/Account.jsx";
import AccountDashboard from "../Components/Account/AccountDashboard.jsx";
import Profile from "../Pages/Profile.jsx";
import NewListing from "../Pages/NewListing.jsx";
import EditListing from "../Pages/EditListing.jsx";
import ShoeListing from "../Pages/ShoeListing.jsx";
import ShoesDisplay from "../Components/ShoesDisplay/ShoesDisplay.jsx";
import Seller from "../Pages/Seller.jsx";
import Store from "../Pages/Store.jsx";
import AboutSeller from "../Pages/AboutSeller.jsx";
import NotFound from "../Pages/NotFound.jsx";
import RootLayout from "../Layouts/RootLayout.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", element: <Home /> },
			{
				path: "/auth",
				element: <Auth />,
				children: [
					{ path: "", element: <Login /> },
					{ path: "signup", element: <SignUp /> },
					{ path: "forgot", element: <Forgot /> },
				],
			},
			{
				path: "/shoes",
				element: <Shoes />,
				children: [
					{ path: "", element: <ShoesDisplay /> },
					{ path: ":id", element: <Shoe /> },
				],
			},
			{
				path: "/account",
				element: <Account />,
				children: [
					{ path: "", element: <AccountDashboard /> },
					{ path: "profile", element: <Profile /> },
					{ path: "listing/new", element: <NewListing /> },
					{ path: "listing/:id/edit", element: <EditListing /> },
					{ path: "listing/:id", element: <ShoeListing /> },
				],
			},
			{
				path: "/seller/:id",
				element: <Seller />,
				children: [
					{ path: "", element: <Store /> },
					{ path: "about", element: <AboutSeller /> },
				],
			},
		],
	},
	{ path: "*", element: <NotFound /> },
]);

export default router;
