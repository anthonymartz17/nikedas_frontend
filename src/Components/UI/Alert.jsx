import { useNavigate } from "react-router-dom";

export default function Alert({
	modalOpen,
	itemToDelete,
	setModalOpen,
	onHandleDeleteListing,
}) {
	const navigate = useNavigate();

	function handleDelete() {
		onHandleDeleteListing();
		setModalOpen(false);
		navigate("/account");
	}

	return (
		<>
			{modalOpen && (
				<div
					id="popup-modal"
					tabIndex="-1"
					className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen bg-gray-700 bg-opacity-50"
				>
					<div className="relative p-4 max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-800">
						<button
							type="button"
							className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
							data-modal-hide="popup-modal"
							onClick={() => setModalOpen(false)}
						>
							<span className="material-symbols-outlined">close</span>
							<span className="sr-only">Close modal</span>
						</button>
						<div className="p-4 md:p-5 text-center">
							<span className="material-symbols-outlined text-7xl text-white">
								warning
							</span>
							<h3 className="mb-5 text-lg font-normal text-white-500 dark:text-white">
								Are you sure you want to delete product{" "}
								<span className="text-yellow-600">
									{itemToDelete.brand} {itemToDelete.model}{" "}
									{itemToDelete.product_number}?
								</span>
							</h3>
							<div className="flex poppins-regular justify-center">
								<button
									data-modal-hide="popup-modal"
									type="button"
									className="text-white  bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 "
									onClick={() => handleDelete()}
								>
									Yes, I'm sure
								</button>
								<button
									data-modal-hide="popup-modal"
									type="button"
									className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
									onClick={() => setModalOpen(false)}
								>
									No, cancel
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
