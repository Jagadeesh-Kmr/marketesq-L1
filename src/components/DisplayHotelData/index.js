import {MdCall, MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const DisplayHotelData = props => {
  const displayHotelDetails = () => (
    <CartContext.Consumer>
      {value => {
        const {displayHotelData} = props
        const {name, phone, rating, price, imageUrl, rooms} = displayHotelData
        const {addStayData} = value

        const onclickAddStayData = () => {
          addStayData({...displayHotelData, rooms})
        }

        return (
          <>
            <li className="hotel-li">
              <img src={imageUrl} alt={name} className="hotel-img" />
              <div className="hotel-details-div">
                <h1 className="hotel-name">{name}</h1>
                <p className="h-d-p">
                  <MdCall /> {phone}
                </p>
                <a
                  className="visit-anchor"
                  href="https://goo.gl/maps/hutERCfHFAFXGZSz8"
                >
                  <MdLocationOn /> Location
                </a>
                <p>₹ {price} /-</p>
                <p className="h-d-p">
                  {`${rating} `} <AiFillStar className="star-icon" />{' '}
                  <AiFillStar className="star-icon" />{' '}
                  <AiFillStar className="star-icon" />{' '}
                  <AiFillStar className="star-icon" />
                </p>
                <button
                  type="button"
                  className="book-btn"
                  onClick={onclickAddStayData}
                >
                  Book
                </button>
              </div>
            </li>
          </>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <>
      <div className="d-h-d-main-div">{displayHotelDetails()}</div>
    </>
  )
}

export default DisplayHotelData
