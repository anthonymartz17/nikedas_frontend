import React, { useState } from "react";
import "./AccountTable.css";
import listings from "../../assets/shoes_db";

export default function AccountTable() {
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const [isModalOpen, setModalOpen] = useState(false);

	const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	return (
		<div class="relative overflow-x-auto shadow-md sm:rounded-lg poppins-regular">
			<div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 px-2 bg-white dark:bg-gray-900 ">
				<div></div>
				<label for="table-search" class="sr-only">
					Search
				</label>
				<div class="relative">
					<div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
						<svg
							class="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="text"
						id="table-search-users"
						class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search for users"
					/>
				</div>
				<div>
					<button
						id="dropdownActionButton"
						data-dropdown-toggle="dropdownAction"
						class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
						type="button"
					>
						<span class="sr-only">Action button</span>
						Action
						<svg
							class="w-2.5 h-2.5 ms-2.5"
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
						class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
					>
						<ul
							class="py-1 text-sm text-gray-700 dark:text-gray-200"
							aria-labelledby="dropdownActionButton"
						>
							<li>
								<a
									href="#"
									class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Reward
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Promote
								</a>
							</li>
							<li>
								<a
									href="#"
									class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
								>
									Activate account
								</a>
							</li>
						</ul>
						<div class="py-1">
							<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>
								Delete User
							</a>
						</div>
					</div>
				</div>
			</div>
			<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" class="p-4">
							<div class="flex items-center">
								<input
									id="checkbox-all-search"
									type="checkbox"
									class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label for="checkbox-all-search" class="sr-only">
									checkbox
								</label>
							</div>
						</th>
						<th scope="col" class="px-6 py-3">
							Photo
						</th>

						<th scope="col" class="px-6 py-3">
							Brand
						</th>
						<th scope="col" class="px-6 py-3">
							Product ID
						</th>

						<th scope="col" class="px-6 py-3">
							Color
						</th>
						<th scope="col" class="px-6 py-3">
							Price
						</th>
						<th scope="col" class="px-6 py-3">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{listings.map((listing) => (
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
							<td class="w-4 p-4">
								<div class="flex items-center">
									<input
										id="checkbox-table-search-1"
										type="checkbox"
										class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label for="checkbox-table-search-1" class="sr-only">
										checkbox
									</label>
								</div>
							</td>
							<td
								scope="row"
								class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
							>
								<img
									class="w-10 h-10 rounded-full"
									src={listing.primary_img}
									alt="Jese image"
								/>
							</td>
							<td class="px-6 py-4">{listing.brand}</td>
							<td class="px-6 py-4">
								<div class="flex items-center">{listing.product_number}</div>
							</td>
							<td class="px-6 py-4 text-wrap">{listing.color}</td>
							<td class="px-6 py-4 text-wrap">${listing.price}</td>
							<td class="px-6 py-4 text-wrap flex gap-2">
								<span class="material-symbols-outlined cursor-pointer hover:text-white">
									visibility
								</span>
								<span class="material-symbols-outlined cursor-pointer hover:text-white">
									edit_square
								</span>
								<span class="material-symbols-outlined cursor-pointer hover:text-white">
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
