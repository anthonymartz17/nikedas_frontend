import React, { useState, useEffect } from "react";
import "./AccountTable.css";
import { Link } from "react-router-dom";
import { fetchAllShoes, deleteListing } from "../../Services/shoes.services";
import Alert from "../UI/Alert";
import { fetchSellerListings } from "../../Services/users.services";
import { useAuth } from "../../Context/AuthContext";
import shoes from "../../assets/shoes_db";
export default function AccountTable({}) {
	const { currentUser } = useAuth();
	const [listings, setListings] = useState(shoes);

	const [modalOpen, setModalOpen] = useState(false);
	const [itemToDelete, setItemToDelete] = useState(null);

	function confirmBeforeDelete(itemToDelete) {
		setModalOpen(true);
		setItemToDelete(itemToDelete);
	}

	async function handleDeleteListing() {
		try {
			await deleteListing(itemToDelete.id);
			setListings((prev) =>
				prev.filter((listing) => listing.id !== itemToDelete.id)
			);
		} catch (error) {
			console.log(error);
		}
	}

	async function getSellerListings(id) {
		console.log(id,'esta?')
		try {
			const shoesData = await fetchSellerListings(id);
			setListings(shoesData);
		} catch (error) {
			//handle error
		}
	}

	useEffect(() => {
		getSellerListings(currentUser.uid);
	}, [currentUser.uid]);

	return (
		<div className="">
			<div className="table_btn_container">
				<Link
					to="listing/new"
					type="button"
					className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-dark dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 poppins-regular"
				>
					<span className="material-symbols-outlined">add</span>{" "}
					<span>Add Listing</span>
				</Link>
			</div>
			<div className="relative rounded-lg  overflow-x-auto shadow-md sm:rounded-lg poppins-regular table-container">
				{/* <div></div> */}
				<table className="w-full text-sm border   text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs poppins-semibold text-gray-700 uppercase bg-gray-50 dark:bg-dark dark:text-white">
						<tr>
							<th scope="col" className="p-4"></th>
							<th scope="col" className="px-6 py-3">
								Photo
							</th>

							<th scope="col" className="px-6 py-3">
								Brand
							</th>
							<th scope="col" className="px-6 py-3">
								Product ID
							</th>

							<th scope="col" className="px-6 py-3">
								Color
							</th>
							<th scope="col" className="px-6 py-3">
								Price
							</th>
							<th scope="col" className="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{listings.length > 0 ? (
							listings.map((listing, idx) => (
								<tr
									key={listing.id}
									className={`bg-white border-b  text-dark dark:border-gray-700 hover:bg-gray-300 ${
										idx % 2 === 0 ? "dark:bg-gray-100" : ""
									}`}
								>
									<td className="w-4 p-4">
										<div className="flex items-center">
											<input
												id="checkbox-table-search-1"
												type="checkbox"
												className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
											/>
											<label
												htmlFor="checkbox-table-search-1"
												className="sr-only"
											>
												checkbox
											</label>
										</div>
									</td>
									<td
										scope="row"
										className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
									>
										<img
											className="w-10 h-10 rounded-full"
											src={listing.primary_img}
											alt="Jese image"
										/>
									</td>
									<td className="px-6 py-4">{listing.brand}</td>
									<td className="px-6 py-4">
										<div className="flex items-center">
											{listing.product_number}
										</div>
									</td>
									<td className="px-6 py-4 text-wrap">{listing.color}</td>
									<td className="px-6 py-4 text-wrap">${listing.price}</td>
									<td className="px-6 py-4 text-wrap flex gap-2 ">
										<Link className="text-dark" to={`listing/${listing.id}`}>
											<span className="material-symbols-outlined cursor-pointer text-green-900">
												visibility
											</span>
										</Link>
										<Link to={`listing/${listing.id}/edit`}>
											<span className="material-symbols-outlined cursor-pointer text-yellow-600">
												edit_square
											</span>
										</Link>

										<span
											onClick={() => confirmBeforeDelete(listing)}
											className="material-symbols-outlined cursor-pointer text-red-900"
										>
											delete
										</span>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td>No listings</td>
							</tr>
						)}
					</tbody>
				</table>
				<Alert
					modalOpen={modalOpen}
					setModalOpen={setModalOpen}
					onHandleDeleteListing={handleDeleteListing}
					itemToDelete={itemToDelete}
				/>
			</div>
		</div>
	);
}
