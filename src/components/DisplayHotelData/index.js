import {Link} from 'react-router-dom'

import {MdCall, MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'

import CreateContext from '../../context/CreateContext'

import './index.css'

const DisplayHotelData = props => {
  const displayHotelDetails = () => (
    <CreateContext.Consumer>
      {value => {
        const {displayHotelData} = props
        const {name, phone, rating, price} = displayHotelData
        const {addStayData} = value

        const onclickAddStayData = () => {
          addStayData({...displayHotelData})
        }

        return (
          <>
            <img
              src="https://digital.ihg.com/is/image/ihg/ihg-homepg-refresh-homepg-mktg-mod-imea-1440x720?fit=crop,1&wid=1440&hei=720"
              alt={name}
              className="hotel-img"
            />
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
              <Link to="/stayDetails">
                <button
                  type="button"
                  className="book-btn"
                  onClick={onclickAddStayData()}
                >
                  Book
                </button>
              </Link>
            </div>
          </>
        )
      }}
    </CreateContext.Consumer>
  )

  return (
    <>
      <div className="d-h-d-main-div">{displayHotelDetails()}</div>
    </>
  )
}

export default DisplayHotelData
