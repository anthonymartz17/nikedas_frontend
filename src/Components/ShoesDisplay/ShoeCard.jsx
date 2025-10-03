import React, { useEffect, useState } from "react";
import "./ShoeCard.css";
import { Link } from "react-router-dom";
export default function ShoeCard({ shoe }) {
	const [displayingVariant, setDisplayingVariant] = useState({});

	const variants = shoe.variants.map((variant) => {
		return {
			id: variant.id,
			url: variant.images.find((item) => item.is_main).url,
		};
	});


	useEffect(() => {
		const default_variant = shoe.variants.find(
			(variant) => variant.id === shoe.default_variant_id
		);

		setDisplayingVariant({
			id: default_variant.id,
			url: default_variant.images.find((item) => item.is_main).url,
		});
	}, []);

	return (
		<div className="shoe_card_link">
			<div className="shoe_card ">
				<Link to={`/shoes/${shoe.id}`} className="shoe_img_container">
					<img src={displayingVariant.url} alt="" />
				</Link>
				<div
					className={`shoe_variants ${
						shoe.id === displayingVariant.id ? "selected_variant" : ""
					}`}
				>
					{variants.map((variant, idx) => (
						<img
							onClick={() => setDisplayingVariant(variant)}
							key={idx}
							src={variant.url}
							alt=""
						/>
					))}
				</div>

				<Link
					to={`/shoes/${shoe.id}`}
					className="shoe_description poppins-light"
				>
					<div>
						<h5 className="poppins-semibold">{`${shoe.brand} ${shoe.name}`}</h5>
						<p>{shoe.audience}'s shoe</p>
					</div>
					<p>{shoe.description}</p>
					<p className="poppins-semibold">${shoe.price}</p>
				</Link>
			</div>
		</div>
	);
}
