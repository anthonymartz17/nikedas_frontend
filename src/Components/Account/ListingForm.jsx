import "./ListingForm.css";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

// services
import {
	createShoe,
	fetchShoeById,
	updateShoe,
} from "../../Services/shoes.services.js";
import { useAuth } from "../../Context/AuthContext.jsx";

export default function ListingForm({ formHeader }) {
	const { currentUser } = useAuth();
	const { id } = useParams();
	const navigate = useNavigate();

	const [listingForm, setListingForm] = useState({
		brand: "",
		model: "",
		size: "",
		color: "",
		gender: "",
		category: "",
		price: "",
		product_number: "",
		description: "",
		primary_img: "",
		secondary_img: [],
		seller_id: null,
	});

	async function getListing(id) {
		try {
			const listing = await fetchShoeById(id);
			setListingForm(listing);
		} catch (error) {
			throw error;
		}
	}

	useEffect(() => {
		if (id) {
			getListing(id);
		}
	}, [id]);

	function handleChange(e) {
		const { id, value } = e.target;
		setListingForm({ ...listingForm, [id]: value });
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const size = listingForm.size;
		const sizeToFloat = parseFloat(size);

		if (id) {
			try {
				const res = await updateShoe(id, { ...listingForm, size: sizeToFloat });
				navigate(`/account/listing/${id}`);
				setListingForm({});
			} catch (error) {
				throw error;
			}
		} else {
			try {
				const res = await createShoe({
					...listingForm,
					size: sizeToFloat,
					seller_id: currentUser.uid,
				});

				navigate(`/account/listing/${res.id}`);
				// setListingForm({});
			} catch (error) {
				throw error;
			}
		}
	}

	return (
		<div className="form_page global_card poppins-regular">
			<h2 className="form_header poppins-semibold">{formHeader}</h2>
			<form className="listing_form" onSubmit={handleSubmit}>
				<div className="flex_row">
					<div className="flex_item">
						<label>
							Brand:
							<input
								className="global_input_field poppins-light"
								type="text"
								placeholder="Enter brand"
								value={listingForm.brand}
								onChange={handleChange}
								id="brand"
								required
							/>
						</label>
					</div>

					<div className="flex_item">
						<label>
							Model:
							<input
								type="text"
								placeholder="Enter model"
								value={listingForm.model}
								onChange={handleChange}
								id="model"
								required
							/>
						</label>
					</div>
				</div>

				<div className="flex_row">
					<div className="flex_item">
						<label>
							Size:
							<input
								type="number"
								placeholder="Enter size"
								value={listingForm.size}
								onChange={handleChange}
								id="size"
								required
							/>
						</label>
					</div>
					<div className="flex_row">
						<div className="flex_item">
							<label>
								Price:
								<input
									type="number"
									placeholder="150.00"
									value={listingForm.price}
									onChange={handleChange}
									id="price"
								/>
							</label>
						</div>
					</div>
					<div className="flex_item">
						<label>
							Color:
							<input
								type="text"
								placeholder="Enter color"
								value={listingForm.color}
								onChange={handleChange}
								id="color"
								required
							/>
						</label>
					</div>
				</div>

				<div className="flex_row">
					<div className="flex_item">
						<label>
							Gender:
							<br />
							<select
								type="text"
								value={listingForm.gender}
								onChange={handleChange}
								id="gender"
								required
							>
								<option value="">-- Choose an option --</option>
								<option value="men">Men's</option>
								<option value="women">Women's</option>
								<option value="kids">Kid's</option>
							</select>
						</label>
					</div>

					<div className="flex_item">
						<label>
							Category:
							<input
								type="text"
								placeholder="Enter category"
								value={listingForm.category}
								onChange={handleChange}
								id="category"
								required
							/>
						</label>
					</div>
				</div>

				<div className="flex_row">
					<div className="flex_item">
						<label>
							Product #:
							<input
								type="text"
								placeholder="Enter product #"
								value={listingForm.product_number}
								onChange={handleChange}
								id="product_number"
								required
							/>
						</label>
					</div>
				</div>
				<div className="flex_row">
					<label className="description">
						Description:
						<br />
						<textarea
							type="textarea"
							placeholder="Enter description"
							value={listingForm.description}
							onChange={handleChange}
							id="description"
							required
							style={{ width: "100%" }}
						/>
					</label>
				</div>

				<div className="flex_row">
					<div className="flex_item">
						<label>
							Primary Img URL:
							<input
								type="text"
								placeholder="Enter img URL"
								value={listingForm.primary_img}
								onChange={handleChange}
								id="primary_img"
								required
							/>
						</label>{" "}
						{listingForm.primary_img && (
							<img src={listingForm.primary_img} className="w-20" />
						)}
					</div>

					<div className="flex_item">
						<label>
							Secondary Images URL(s):
							<input
								type="text"
								placeholder="img urls separated by commas"
								value={listingForm.secondary_img}
								onChange={handleChange}
								id="secondary_img"
							/>
						</label>
						{/* {listingForm.secondary_img && (
							<div className="flex_item">
								<label>
									Secondary Images Previews:
									<div className="secondary_img_preview">
										{listingForm.secondary_img.map((url) => (
											<img src={url} key={url} className="w-20" />
										))}
									</div>
								</label>
							</div>
						)} */}
					</div>
				</div>

				<div className="listing_form_buttons">
					<Link to="/account" className="btn btn_mute_dark">
						Cancel
					</Link>
					<button className=" btn btn_bg_dark">
						{id ? "Update" : "Create"} Listing
					</button>
				</div>
			</form>
		</div>
	);
}
