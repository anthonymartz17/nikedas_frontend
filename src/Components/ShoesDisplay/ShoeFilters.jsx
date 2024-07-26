import React, { useEffect, useState } from "react";
import "./ShoeFilters.css";

export default function ShoeFilters() {
	const [sortOption, setSortOption] = useState("");
	const [kidsOption, setKidsOption] = useState("");
	const [brandOption, setBrandOption] = useState("");
	const [colorOption, setColorOption] = useState("");
  const [priceOption, setPriceOption] = useState("");
  

 

	return (
		<div className="shoe_filters">
			<div className="shoe_apply_btn_container">
				<button className="btn btn_bg_dark">Apply</button>
			</div>
			<div className="filter_group">
				<p className="poppins-semibold mb-2">Sort By</p>
				<div className="flex items-center mb-4">
					<input
						id="sort-featured"
						type="radio"
						value="featured"
						name="sort"
						className="w-4 h-4"
						checked={sortOption === "featured"}
						onChange={(e) => setSortOption(e.target.value)}
					/>
					<label htmlFor="sort-featured" className="ms-2">
						Featured
					</label>
				</div>
				<div className="flex items-center mb-4">
					<input
						id="sort-newest"
						type="radio"
						value="newest"
						name="sort"
						className="w-4 h-4"
						checked={sortOption === "newest"}
						onChange={(e) => setSortOption(e.target.value)}
					/>
					<label htmlFor="sort-newest" className="ms-2">
						Newest
					</label>
				</div>
				<div className="flex items-center mb-4">
					<input
						id="sort-high-low"
						type="radio"
						value="high-low"
						name="sort"
						className="w-4 h-4"
						checked={sortOption === "high-low"}
						onChange={(e) => setSortOption(e.target.value)}
					/>
					<label htmlFor="sort-high-low" className="ms-2">
						Price: High-Low
					</label>
				</div>
				<div className="flex items-center mb-4">
					<input
						id="sort-low-high"
						type="radio"
						value="low-high"
						name="sort"
						className="w-4 h-4"
						checked={sortOption === "low-high"}
						onChange={(e) => setSortOption(e.target.value)}
					/>
					<label htmlFor="sort-low-high" className="ms-2">
						Price: Low-High
					</label>
				</div>
			</div>

			<div className="filter_group">
				<p className="poppins-semibold mb-2">Kids</p>
				<div className="flex items-center mb-4">
					<input
						id="kids-big"
						type="radio"
						value="big-kids"
						name="kids"
						className="w-4 h-4"
						checked={kidsOption === "big-kids"}
						onChange={(e) => setKidsOption(e.target.value)}
					/>
					<label htmlFor="kids-big" className="ms-2">
						Big Kids (1Y - 7Y)
					</label>
				</div>
				<div className="flex items-center mb-4">
					<input
						id="kids-little"
						type="radio"
						value="little-kids"
						name="kids"
						className="w-4 h-4"
						checked={kidsOption === "little-kids"}
						onChange={(e) => setKidsOption(e.target.value)}
					/>
					<label htmlFor="kids-little" className="ms-2">
						Little Kids (8C - 3Y)
					</label>
				</div>
			</div>

			<div className="filter_group">
				<p className="poppins-semibold mb-2">Brand</p>
				<div className="flex items-center mb-4">
					<input
						id="brand-nike"
						type="radio"
						value="nike"
						name="brand"
						className="w-4 h-4"
						checked={brandOption === "nike"}
						onChange={(e) => setBrandOption(e.target.value)}
					/>
					<label htmlFor="brand-nike" className="ms-2">
						Nike Sportswear
					</label>
				</div>
				<div className="flex items-center mb-4">
					<input
						id="brand-jordan"
						type="radio"
						value="jordan"
						name="brand"
						className="w-4 h-4"
						checked={brandOption === "jordan"}
						onChange={(e) => setBrandOption(e.target.value)}
					/>
					<label htmlFor="brand-jordan" className="ms-2">
						Jordan
					</label>
				</div>
				<div className="flex items-center mb-4">
					<input
						id="brand-converse"
						type="radio"
						value="converse"
						name="brand"
						className="w-4 h-4"
						checked={brandOption === "converse"}
						onChange={(e) => setBrandOption(e.target.value)}
					/>
					<label htmlFor="brand-converse" className="ms-2">
						Converse
					</label>
				</div>
				<div className="flex items-center mb-4">
					<input
						id="brand-acg"
						type="radio"
						value="acg"
						name="brand"
						className="w-4 h-4"
						checked={brandOption === "acg"}
						onChange={(e) => setBrandOption(e.target.value)}
					/>
					<label htmlFor="brand-acg" className="ms-2">
						ACG
					</label>
				</div>
			</div>

			<div className="filter_group">
				<p className="poppins-semibold mb-2">Color</p>
				<div className="flex items-center mb-4">
					<input
						id="color-black"
						type="radio"
						value="black"
						name="color"
						className="w-4 h-4"
						checked={colorOption === "black"}
						onChange={(e) => setColorOption(e.target.value)}
					/>
					<label htmlFor="color-black" className="ms-2">
						Black
					</label>
				</div>
				<div className="flex items-center mb-4">
					<input
						id="color-blue"
						type="radio"
						value="blue"
						name="color"
						className="w-4 h-4"
						checked={colorOption === "blue"}
						onChange={(e) => setColorOption(e.target.value)}
					/>
					<label htmlFor="color-blue" className="ms-2">
						Blue
					</label>
				</div>
				<div className="flex items-center mb-4">
					<input
						id="color-green"
						type="radio"
						value="green"
						name="color"
						className="w-4 h-4"
						checked={colorOption === "green"}
						onChange={(e) => setColorOption(e.target.value)}
					/>
					<label htmlFor="color-green" className="ms-2">
						Green
					</label>
				</div>
				<div className="flex items-center mb-4">
					<input
						id="color-grey"
						type="radio"
						value="grey"
						name="color"
						className="w-4 h-4"
						checked={colorOption === "grey"}
						onChange={(e) => setColorOption(e.target.value)}
					/>
					<label htmlFor="color-grey" className="ms-2">
						Grey
					</label>
				</div>
			</div>

			<div className="filter_group">
				<p className="poppins-semibold mb-2">Price</p>
				<div className="flex items-center mb-4">
					<input
						id="price-25-50"
						type="radio"
						value="25-50"
						name="price"
						className="w-4 h-4"
						checked={priceOption === "25-50"}
						onChange={(e) => setPriceOption(e.target.value)}
					/>
					<label htmlFor="price-25-50" className="ms-2">
						$25 - $50
					</label>
				</div>
				<div className="flex items-center mb-4">
					<input
						id="price-50-100"
						type="radio"
						value="50-100"
						name="price"
						className="w-4 h-4"
						checked={priceOption === "50-100"}
						onChange={(e) => setPriceOption(e.target.value)}
					/>
					<label htmlFor="price-50-100" className="ms-2">
						$50 - $100
					</label>
				</div>
				<div className="flex items-center mb-4">
					<input
						id="price-100-150"
						type="radio"
						value="100-150"
						name="price"
						className="w-4 h-4"
						checked={priceOption === "100-150"}
						onChange={(e) => setPriceOption(e.target.value)}
					/>
					<label htmlFor="price-100-150" className="ms-2">
						$100 - $150
					</label>
				</div>
				<div className="flex items-center mb-4">
					<input
						id="price-150+"
						type="radio"
						value="150+"
						name="price"
						className="w-4 h-4"
						checked={priceOption === "150+"}
						onChange={(e) => setPriceOption(e.target.value)}
					/>
					<label htmlFor="price-150+" className="ms-2">
						Over $150
					</label>
				</div>
			</div>
		</div>
	);
}
