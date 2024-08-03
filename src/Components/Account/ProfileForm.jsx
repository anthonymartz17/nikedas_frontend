import "./ProfileForm.css";
import "./ListingForm.css";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

// firebase
import { useAuth } from "../../Context/AuthContext.jsx";

// services
import { fetchUserById, updateUser } from "../../Services/users.services.js";

export default function ProfileForm({ formHeader }) {
	const { currentUser } = useAuth();

	const [alertMsg, setAlertMsg] = useState({
		isSuccess: false,
		isError: false,
		msg: "",
	});
	const [profileForm, setProfileForm] = useState({
		first_name: "",
		last_name: "",
		email: "",
		phone_number: "",
		about_store: "",
	});

	// get user profile
	async function getUser(id) {
		try {
			const user = await fetchUserById(id);
			setProfileForm(user);
		} catch (error) {
			throw error;
		}
	}

	// handle form
	function handleChange(e) {
		const { id, value } = e.target;

		setProfileForm({ ...profileForm, [id]: value });
	}

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			const res = await updateUser(currentUser.uid, profileForm);
			setAlertMsg({
				isSuccess: true,
				isError: false,
				msg: "Successfully updated profile",
			});
		} catch (error) {
			setAlertMsg({
				isSuccess: false,
				isError: true,
				msg: error,
			});
		}
	}
	useEffect(() => {
		try {
			getUser(currentUser.uid);
		} catch (error) {
			throw error;
		}
	}, [currentUser.uid]);

	return (
		<div>
			{!currentUser ? (
				<div
					role="status"
					className="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
				>
					<div className="flex items-center justify-between">
						<div>
							<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
							<div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						</div>
						<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
					</div>
					<div className="flex items-center justify-between pt-4">
						<div>
							<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
							<div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						</div>
						<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
					</div>
					<div className="flex items-center justify-between pt-4">
						<div>
							<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
							<div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						</div>
						<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
					</div>
					<div className="flex items-center justify-between pt-4">
						<div>
							<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
							<div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						</div>
						<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
					</div>
					<div className="flex items-center justify-between pt-4">
						<div>
							<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
							<div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
						</div>
						<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
					</div>
					<span className="sr-only">Loading...</span>
				</div>
			) : (
				<div className="global_card relative">
					{alertMsg.isSuccess ||
						(alertMsg.isError && (
							<div
								className={`${
									alertMsg.isSuccess ? "bg-green-600" : "bg-red-600"
								}absolute top-0 left-0 right-0 p-1 text-center text-light`}
							>
								{alertMsg.msg}
							</div>
						))}
					<h2 className="form_header">{formHeader}</h2>
					<form className="listing_form " onSubmit={handleSubmit}>
						<div className="flex_item">
							<label>
								Email:
								<input
									type="text"
									placeholder="Email"
									value={profileForm.email || ""}
									id="email"
									disabled
								/>
							</label>
						</div>

						<div className="flex_item">
							<label>
								First Name:
								<input
									type="text"
									placeholder="First Name"
									value={profileForm.first_name || ""}
									onChange={handleChange}
									id="first_name"
									required
								/>
							</label>
						</div>

						<div className="flex_item">
							<label>
								Last Name:
								<input
									type="text"
									placeholder="Last Name"
									value={profileForm.last_name || ""}
									onChange={handleChange}
									id="last_name"
									required
								/>
							</label>
						</div>

						<div className="flex_item">
							<label>
								Phone Number:
								<input
									type="text"
									placeholder="Phone"
									value={profileForm.phone_number || ""}
									onChange={handleChange}
									id="phone_number"
									required
								/>
							</label>
						</div>

						<div className="flex_item">
							<label>
								About Store:
								<br />
								<textarea
									type="text"
									placeholder="Hype up your store."
									value={profileForm.about_store || ""}
									onChange={handleChange}
									id="about_store"
								/>
							</label>
						</div>

						<div className="flex-col flex justify-center gap-2  lg:flex-">
							<Link to="/account" className="btn btn_mute_dark">
								Cancel
							</Link>

							<button className="btn btn_bg_dark">Update Profile</button>
						</div>
					</form>
				</div>
			)}
		</div>
	);
}
