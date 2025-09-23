import React, { useEffect, useState } from "react";
import "./ShoeCard.css";
import { Link } from "react-router-dom";
export default function ShoeCard({ shoe }) {
	// const navigate = useNavigate();

	const [primaryImg, setPrimaryImg] = useState("");

	const variants = shoe.variants.map((variant) =>
		variant.images.find((item) => item.is_main)
	);

	useEffect(() => {
		const default_variant = shoe.variants.find(
			(variant) => variant.id === shoe.default_variant_id
		);
		const primary_img = default_variant.images.find((pic) => pic.is_main).url;
		setPrimaryImg(primary_img);
	}, []);

	return (
		<div className="shoe_card_link">
			<div className="shoe_card ">
				<Link to={`/shoes/${shoe.id}`} className="shoe_img_container">
					<img src={primaryImg} alt="" />
				</Link>
				<div className="shoe_variants" >
					{variants.map((variant, idx) => (
						<img onClick={()=> setPrimaryImg(variant.url)} key={idx} src={variant.url} alt="" />
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
