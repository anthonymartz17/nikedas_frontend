import "./Hero.css";
import heroShoe from "../../../public/assets/hero-shoe-01.png";
import { Link } from "react-router-dom";
import fire from "../../assets/graphics/fire.svg";
export default function Hero() {
	return (
		<section className="hero">
			<section className="hero-text-block">
				<p className="hero-heading poppins-semibold">
					H
					<span className="hero_fire">
						o
						<img src={fire} alt="" />
					</span>
					ttest Products all year long.
				</p>
				<p className="hero-text poppins-light">
					Elevate your shoe game with our latest collection that's making waves
					in the industry
				</p>
				<div className="hero-buttons">
					<Link to="/shoes" className="btn btn_bg_dark">
						Browse
					</Link>
					<Link to="/auth/signup" className="btn btn_mute_dark">
						Become Seller
					</Link>
				</div>
			</section>
			<div className="hero_img_container">
				<img className="hero-img" src={heroShoe} />
			</div>
		</section>
	);
}
