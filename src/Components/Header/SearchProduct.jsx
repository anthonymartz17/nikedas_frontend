import "./SearchProduct.css";
import logoFullDark from "../../assets/logos_nikeda/nikedas_dark.png";

import Shoes from "../../assets/shoes_db";
import ShoeCard from "../ShoesDisplay/ShoeCard";
export default function SearchProduct({ onToggleSearch }) {
	return (
		<div className="search">
			<div className="search_logo_container">
				<img
					className="nikedas_full_logo"
					src={logoFullDark}
					alt="nikedas_logo"
				/>
			</div>

			<div className="search_header">
				<input
					className="search_searchbar"
					type="text"
					placeholder="Search"
					autoFocus
				/>

				<p className="search_close" onClick={() => onToggleSearch()}>
					Cancel
				</p>
			</div>
			<div className="search_results">
				{Shoes.map((shoe) => (
					<ShoeCard shoe={shoe} key={shoe.id} />
				))}
			</div>
		</div>
	);
}
