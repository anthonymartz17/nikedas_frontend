import './Hero.css'
import heroShoe from '../../../public/assets/hero-shoe-01.png'
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="hero">
      <section className="hero-text-block">
        <h2 className="hero-heading">Hottest Product of the Month</h2>
        <p className="hero-text">Elevate your shoe game with our latest 
        collection that's making waves in the industry</p>
        <div className="hero-buttons">
          <Link to="/shoes" className="btn btn_bg_dark">Browse</Link>
          <Link to="/auth/signup" className="btn btn_bg_light">Become Seller</Link>
        </div>
      </section>
      <img className="hero-img" src={heroShoe} />
    </section>
  )
}
