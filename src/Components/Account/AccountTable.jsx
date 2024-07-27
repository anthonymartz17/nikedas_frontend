import React, { useState, useEffect } from "react";
import "./AccountTable.css";
import { Link } from "react-router-dom";
import { fetchAllShoes } from "../../Services/shoes.services";

export default function AccountTable({ onConfirmBeforeDelete, toDeleteId }) {
	// const [isDropdownOpen, setDropdownOpen] = useState(false);
	const [listings, setListings] = useState([]);

	// const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
	// const openModal = () => setModalOpen(true);
	// const closeModal = () => setModalOpen(false);

	async function handleDeleteTransaction() {
		console.log(toDeleteId);
		try {
			// await deleteListing(toDeleteId);
			// setTransactions((prev) =>
			// 	prev.filter((tranx) => tranx.id !== toDeleteId)
			// );
		} catch (error) {
			console.log(error);
		}
	}

	//temp logic until auth is worked on
	async function getSellerListings() {
		try {
			const shoesData = await fetchAllShoes();
			setListings(shoesData);
		} catch (error) {}
	}

	useEffect(() => {
		getSellerListings();
	}, []);

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg poppins-regular m-3">
			<div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 px-2 bg-white dark:bg-gray-900 ">
				<div></div>
				{/* <label htmlFor="table-search" className="sr-only">
					Search
				</label>
				<div className="relative">
					<div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
						<svg
							className="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="text"
						id="table-search-users"
						className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search for users"
					/>
				</div> */}
				{/* <div>
					<button
						id="dropdownActionButton"
						data-dropdown-toggle="dropdownAction"
						className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						type="button"
					>
						<span className="sr-only">Action button</span>
						Action
						<svg
							className="w-2.5 h-2.5 ms-2.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 10 6"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</button>

					<div
						id="dropdownAction"
						className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
					>
						<ul
							className="py-1 text-sm text-gray-700 dark:text-gray-200"
							aria-labelledby="dropdownActionButton"
						>
							<li>
								<a
									href="#"
									className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Reward
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Promote
								</a>
							</li>
							<li>
								<a
									href="#"
									className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Activate account
								</a>
							</li>
						</ul>
						<div className="py-1">
							<a
								href="#"
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>
								Delete User
							</a>
						</div>
					</div>
				</div> */}
			</div>
			<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="p-4">
							<div className="flex items-center">
								<input
									id="checkbox-all-search"
									type="checkbox"
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label htmlFor="checkbox-all-search" className="sr-only">
									checkbox
								</label>
							</div>
						</th>
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
					{listings.map((listing) => (
						<tr
							key={listing.id}
							className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
						>
							<td className="w-4 p-4">
								<div className="flex items-center">
									<input
										id="checkbox-table-search-1"
										type="checkbox"
										className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label htmlFor="checkbox-table-search-1" className="sr-only">
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
							<td className="px-6 py-4 text-wrap flex gap-2">
								<Link to={`listing/${listing.id}`}>
									<span className="material-symbols-outlined cursor-pointer hover:text-white">
										visibility
									</span>
								</Link>
								<Link to={`listing/${listing.id}/edit`}>
									<span className="material-symbols-outlined cursor-pointer hover:text-white">
										edit_square
									</span>
								</Link>

								<span
									onClick={() => onConfirmBeforeDelete(listing.id)}
									className="material-symbols-outlined cursor-pointer hover:text-white"
								>
									delete
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
