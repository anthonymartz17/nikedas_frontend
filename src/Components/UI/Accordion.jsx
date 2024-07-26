import React, { useState } from "react";
import "./Accordion.css";
import AccordionItem from "./AccordionItem";
export default function Accordion() {
	const [filters, setFilters] = useState({
		sortOption: "",
		kidsOption: "",
		brandOption: "",
		colorOption: "",
		priceOption: "",
	});

	const filterData = [
		{
			title: "Sort By",
			options: [
				{ id: "sort-featured", value: "featured", label: "Featured" },
				{ id: "sort-newest", value: "newest", label: "Newest" },
				{ id: "sort-high-low", value: "high-low", label: "Price: High-Low" },
				{ id: "sort-low-high", value: "low-high", label: "Price: Low-High" },
			],
			key: "sortOption",
		},
		{
			title: "Kids",
			options: [
				{ id: "kids-big", value: "big-kids", label: "Big Kids (1Y - 7Y)" },
				{
					id: "kids-little",
					value: "little-kids",
					label: "Little Kids (8C - 3Y)",
				},
			],
			key: "kidsOption",
		},
		{
			title: "Brand",
			options: [
				{ id: "brand-nike", value: "nike", label: "Nike Sportswear" },
				{ id: "brand-jordan", value: "jordan", label: "Jordan" },
				{ id: "brand-converse", value: "converse", label: "Converse" },
				{ id: "brand-acg", value: "acg", label: "ACG" },
			],
			key: "brandOption",
		},
		{
			title: "Color",
			options: [
				{ id: "color-black", value: "black", label: "Black" },
				{ id: "color-blue", value: "blue", label: "Blue" },
				{ id: "color-green", value: "green", label: "Green" },
				{ id: "color-grey", value: "grey", label: "Grey" },
			],
			key: "colorOption",
		},
		{
			title: "Price",
			options: [
				{ id: "price-25-50", value: "25-50", label: "$25 - $50" },
				{ id: "price-50-100", value: "50-100", label: "$50 - $100" },
				{ id: "price-100-150", value: "100-150", label: "$100 - $150" },
				{ id: "price-150+", value: "150+", label: "Over $150" },
			],
			key: "priceOption",
		},
	];

	const handleChange = (key) => (value) => {
		setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
	};

	return (
		<div className="accordion">
			{filterData.map(({ title, options, key }) => (
				<AccordionItem
					key={title}
					title={title}
					options={options}
					selectedValue={filters[key]}
					onChange={handleChange(key)}
				/>
			))}
		</div>
	);
}
