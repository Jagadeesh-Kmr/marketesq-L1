import {Link} from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'

import CartContext from '../../context/CartContext'

import './index.css'

const OrderSuccess = () => {
  const renderOrderSuccessView = () => (
    <CartContext.Consumer>
      {value => {
        const {personDetails} = value

        return (
          <>
            <div className="payment-success-bg-div">
              <div className="person-data-main-div">
                <div className="person-data-div">
                  <h1 className="person-h1">{personDetails.personName}</h1>
                  <p className="person-p">{personDetails.email}</p>
                  <p className="person-p">91 + {personDetails.phone}</p>
                  <p className="person-p">Gender: {personDetails.gender}</p>
                </div>
              </div>

              <hr className="payment-hr" />

              <div className="payment-complete-main-div">
                <div className="payment-complete-div">
                  <img
                    src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1689438440/VectorgreenTick_ooyohn.png"
                    alt="order success"
                    className="green-tick-img"
                  />
                  <p className="order-success-p">
                    Order Complete
                    <br />
                    Thank You
                  </p>

                  <Link to="/">
                    <button type="button" className="visit-again-btn">
                      Visit Again
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <>
      <Header />
      <div className="payment-success-main-div">{renderOrderSuccessView()}</div>
      <Footer />
    </>
  )
}

export default OrderSuccess
