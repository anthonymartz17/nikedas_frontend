import './Hero.css'
import heroShoe from '../../../public/assets/hero-shoe-01.png'

export default function Hero() {
  return (
    <section className="hero">
      <section className="hero-text-block">
        <h2 className="hero-heading">Hottest Product of the Month</h2>
        <p className="hero-text">Elevate your shoe game with our latest 
        collection that's making waves in the industry</p>
        <div className="hero-buttons">
          <button className="btn browse">Browse</button>
          <button className="btn sign_up">Become Seller</button>
        </div>
      </section>
      <img className="hero-img" src={heroShoe} />
    </section>
  )
}
