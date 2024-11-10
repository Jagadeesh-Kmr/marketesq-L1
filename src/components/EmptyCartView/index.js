import {Link} from 'react-router-dom'

import './index.css'

const EmptyCartView = () => (
  <div className="cart-empty-view-container">
    <img
      src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg"
      className="cart-empty-img"
      alt="cart empty"
    />

    <h1 className="cart-empty-heading">Explore Now</h1>
    <p className="cart-empty-desc">Your cart is empty.</p>
    <Link to="/">
      <button type="button" className="shop-now-btn">
        Find a stay
      </button>
    </Link>
  </div>
)

export default EmptyCartView
