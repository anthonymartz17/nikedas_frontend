const shoeCategories = [
	"All Shoes",
	"Lifestyle",
	"Jordan",
	"Dunk",
	"Retro Running",
	"Air Max",
	"Air Force 1",
	"Training & Gym",
	"Basketball",
	"Running",
	"Nike SB",
	"Sandals & Slides",
	"Shop by Sport",
	"Golf",
	"Soccer",
	"Tennis",
	"Baseball",
	"Football",
	"Trail Running",
];
import "./Subcategories.css"

// Remove duplicates using Set
const uniqueShoeCategories = [...new Set(shoeCategories)];

console.log(uniqueShoeCategories);

export default function Subcategories() {
	return (
    <div className="subcategories">
      
			<ul className="subcategories_list poppins-regular">
				{shoeCategories.map((category, idx) => (
					<li className="subcategories_list_item" key={idx}>{category}</li>
				))}
			</ul>
		</div>
	);
}
