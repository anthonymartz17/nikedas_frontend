import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ShoeDetail.css";
import { capitalizeFirstLetters } from "../../Utils/strings.utils";
import { fetchShoeById } from "../../Services/shoes.services";
import products from "../../Data/product_temp_data.json";
const shoeSizes = [
	"5",
	"5.5",
	"6",
	"6.5",
	"7",
	"7.5",
	"8",
	"8.5",
	"9",
	"9.5",
	"10",
	"10.5",
	"11",
	"11.5",
	"12",
	"12.5",
	"13",
	"13.5",
	"14",
];

export default function ShoeDetail() {
	const { id } = useParams();
	const [shoe, setShoe] = useState(null);
	const [currentImg, setCurrentImg] = useState({});
	const [selectedVariantImages, setSelectedVariantImages] = useState([]);
	const [variantImages, setVariantImages] = useState([]);

	async function setShoeDetails(id) {
		try {
			const selectedShoe = await fetchShoeById(id);
			if (selectedShoe) {
				setShoe(selectedShoe);

				const images = findColorVariantImages(
					selectedShoe,
					selectedShoe.default_variant_id
				);
				setSelectedVariantImages(images);
				setCurrentImg(images.find((img) => img.is_main));

				const variants = selectedShoe.variants.map((variant) => {
					return {
						variant_id: variant.id,
						url: variant.images.find((item) => item.is_main).url,
					};
				});

				setVariantImages(variants);
			}
		} catch (error) {
			//handle error properly
			throw error;
		}
	}

	function findColorVariantImages(shoe, variantId) {
		return (
			shoe.variants.find((variant) => variant.id === variantId)?.images || []
		);
	}

	function handleVariantChange(variantId) {
		const images = findColorVariantImages(shoe, variantId);
		setSelectedVariantImages(images);
		setCurrentImg(images.find((img) => img.is_main) || images[0]);
	}

	useEffect(() => {
		setShoeDetails(id);
	}, [id]);

	if (!shoe) return <div>Loading...</div>;

	return (
		<div className="shoe_detail">
			<div className="shoe_description">
				<div>
					<h5 className="poppins-semibold">
						{" "}
						{shoe ? capitalizeFirstLetters(`${shoe.brand} ${shoe.name}`) : ""}
					</h5>
					<p>
						{shoe
							? capitalizeFirstLetters(`${shoe.audience}'s ${shoe.description}`)
							: ""}
					</p>
				</div>
				<p className="poppins-semibold">${shoe.price}</p>
			</div>
			<div className="shoe_display">
				<div className="shoe_display_main">
					<img src={currentImg.url} alt={`photo of ${shoe.brand} shoe`} />
				</div>
				<div className="shoe_display_collage">
					<ul className="shoe_display_collage_list">
						{selectedVariantImages.map((img, idx) => (
							<li
								onClick={() => setCurrentImg(img)}
								className="shoe_display_collage_list_item cur"
								key={idx}
							>
								<img src={img.url} alt={`photo of ${shoe.brand} shoe`} />
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className="shoe_variants">
				<ul>
					{variantImages.map((img, idx) => (
						<li
							onClick={() => handleVariantChange(img.variant_id)}
							className="shoe_display_collage_list_item cur"
							key={idx}
						>
							<img src={img.url} alt={`photo of ${shoe.brand} shoe`} />
						</li>
					))}
				</ul>
			</div>

			<div className="shoe_sizes">
				<p className="poppins-semibold">Select Size</p>
				<ul className="shoe_sizes_list">
					{shoeSizes.map((size, idx) => (
						<li className="shoe_sizes_list_item" key={idx}>
							<button className="btn btn_mute_dark">{size}</button>
						</li>
					))}
				</ul>
			</div>
			<div className="shoes_action_btn">
				<button className="btn btn_bg_dark">Add To Bag</button>
			</div>
		</div>
	);
}
