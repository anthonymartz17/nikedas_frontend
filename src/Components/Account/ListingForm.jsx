import "./ListingForm.css";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

// services
import {
	createShoe,
	fetchShoeById,
	updateShoe,
} from "../../Services/shoes.services.js";

import Input from "./Input.jsx";

const user_id = 2;

export default function ListingForm({ formHeader }) {
	const [listingForm, setListingForm] = useState({
		brand: "",
		model: "",
		size: 0,
		color: "",
		gender: "",
		category: "",
		price: 0,
		product_number: "",
		sku: 0,
		description: "",
		primary_img: "",
		secondary_img: [],
		seller_id: user_id,
	});
	const { id } = useParams();
	const navigate = useNavigate();

	async function getListing(id) {
		const listing = await fetchShoeById(id);
		setListingForm(listing);
	}

	useEffect(() => {
		if (id) {
			try {
				getListing(id);
			} catch (error) {
				throw error;
			}
		}
	}, [id]);

	function handleChange(e) {
		const value = e.target.value;
		setListingForm({ ...listingForm, [e.target.id]: e.target.value });
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const size = listingForm.size;
		const sizeToFloat = parseFloat(size);

		if (id) {
			try {
				const res = await updateShoe(id, { ...listingForm, size: sizeToFloat });
				navigate(`/account/listing/${id}`);
			} catch (error) {
				throw error;
			}
		} else {
			try {
				const res = await createShoe({ ...listingForm, size: sizeToFloat });
			} catch (error) {
				throw error;
			}
		}
	}

	return (
		<div className="form_page global_card poppins-regular">
			<h2 className="form_header">{formHeader}</h2>
			<form className="listing_form" onSubmit={handleSubmit}>
				<div className="flex_row">
					<div className="flex_item">
						<label>
							Brand:
							<input
								className="global_input_field"
								type="text"
								placeholder="Brand"
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
								placeholder="Model"
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
								placeholder="Size"
								value={listingForm.size}
								onChange={handleChange}
								id="size"
								required
							/>
						</label>
					</div>

					<div className="flex_item">
						<label>
							Color:
							<input
								type="text"
								placeholder="color"
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
								<option value="mens">Men's</option>
								<option value="womens">Women's</option>
								<option value="kids">Kid's</option>
							</select>
						</label>
					</div>

					<div className="flex_item">
						<label>
							Category:
							<input
								type="text"
								placeholder="Category"
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
								placeholder="Product #"
								value={listingForm.product_number}
								onChange={handleChange}
								id="product_number"
								required
							/>
						</label>
					</div>

					<div className="flex_item">
						<label>
							SKU:
							<input
								type="number"
								placeholder="sku"
								value={listingForm.sku}
								onChange={handleChange}
								id="sku"
								required
							/>
						</label>
					</div>
				</div>

				<label className="description">
					Description:
					<br />
					<textarea
						type="textarea"
						placeholder="Description"
						value={listingForm.description}
						onChange={handleChange}
						id="description"
						required
						style={{ width: "100%" }}
					/>
				</label>

				<div className="flex_row">
					<div className="flex_item">
						<label>
							Primary Img URL:
							<input
								type="text"
								placeholder="http://www.someplaceonthenet.com/img.jpg"
								value={listingForm.primary_img}
								onChange={handleChange}
								id="primary_img"
								required
							/>
						</label>
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
					</div>
				</div>

				<div className="flex_row">
					<div className="flex_item">
						<label>
							Primary Img Preview:
							<img src={listingForm.primary_img} />
						</label>
					</div>

					<div className="flex_item">
						<label>
							Secondary Images Previews:
							<div className="secondary_img_preview">
								{listingForm.secondary_img.map((url) => (
									<img src={url} key={url} />
								))}
							</div>
						</label>
					</div>
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

				<div className="flex_row">
					<div className="form_button flex_item ">
						<Link to="/account" className="w-full">
							<button className="btn btn_mute_dark">Cancel</button>
						</Link>
					</div>
					<div className="form_button flex_item">
						<button className="btn_bg_dark">
							{id ? "Update" : "Create"} Listing
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
