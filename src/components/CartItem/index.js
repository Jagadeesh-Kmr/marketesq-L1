import {useState} from 'react'

import {Link} from 'react-router-dom'

import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = () => {
  const [personName, setPersonName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')

  return (
    <CartContext.Consumer>
      {value => {
        const {
          increaseQuantity,
          decreaseQuantity,
          stayList,
          removeStayList,
          addPersonData,
        } = value

        const onClickIncrement = () => {
          stayList.map(eachData => increaseQuantity(eachData.id))
        }

        const onClickDecrement = () => {
          stayList.map(eachData => decreaseQuantity(eachData.id))
        }

        const onClickPayNow = () => {
          removeStayList()
          addPersonData({personName, email, phone, gender})
        }

        const renderCartList = () => (
          <>
            <li className="cart-list">
              <div className="cart-list-container">
                {stayList.map(eachList => (
                  <>
                    <div className="cart-hotel-main-div">
                      <div>
                        <h1 className="hotel-cart-h1">Hotel</h1>
                        <img
                          src={eachList.imageUrl}
                          alt={stayList.name}
                          className="hotel-cart-img"
                        />
                        <p className="hotel-cart-p">{eachList.name}</p>
                      </div>
                      <div>
                        <h1 className="hotel-rooms-h1">Rooms</h1>
                        <div className="cart-no-of-rooms-container">
                          <button
                            type="button"
                            className="quantity-controller-button"
                            onClick={onClickDecrement}
                          >
                            <BsDashSquare className="quantity-icon" />
                          </button>
                          <p className="quantity-p">{eachList.rooms}</p>
                          <button
                            type="button"
                            className="quantity-controller-button"
                          >
                            <BsPlusSquare
                              className="quantity-icon"
                              onClick={onClickIncrement}
                            />
                          </button>
                        </div>
                      </div>
                      <div className="price-div">
                        <h1 className="payment-cart-h1">Payment</h1>
                        <div className="cart-payment-btn-div">
                          <Link to="/payment">
                            <button type="button" className="price-btn">
                              ₹ {eachList.price * eachList.rooms} /-
                            </button>
                          </Link>

                          <p className="token-p">Click to pay token amount</p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </li>
          </>
        )

        const renderPersonDetails = () => (
          <>
            <div className="person-details-bg-div">
              <div>
                <input
                  type="text"
                  className="p-d-input"
                  placeholder="Name"
                  onChange={e => setPersonName(e.target.value)}
                />
                <input
                  type="text"
                  className="p-d-input"
                  placeholder="Phone Number"
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="p-d-input"
                  placeholder="E-Mail"
                  onChange={e => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  className="p-d-input"
                  placeholder="Gender"
                  onChange={e => setGender(e.target.value)}
                />
              </div>
            </div>
          </>
        )

        return (
          <>
            {renderPersonDetails()}
            {renderCartList()}
            <div className="pay-now-btn-div">
              <Link to="/payment">
                <button
                  type="submit"
                  className="pay-now-btn"
                  onClick={onClickPayNow}
                >
                  Pay Now
                </button>
              </Link>
            </div>
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartItem
