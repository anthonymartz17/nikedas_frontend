import "./SearchProduct.css";

export default function SearchProduct({ onToggleSearch }) {
	return (
		<div className="search">
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
			<div className="search_results">{/* search results goes here */}</div>
		</div>
	);
}
