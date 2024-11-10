import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'

import DisplayHotelData from '../DisplayHotelData'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  loading: 'LOADING',
  success: 'SUCCESS',
}

const Content = () => {
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    stayData: [],
    errorMsg: '',
  })

  const getStayDetails = async () => {
    setApiResponse({
      status: apiStatusConstants.inProgress,
      stayData: null,
      errorMsg: null,
    })

    const url =
      'https://eecf8975-6c57-4990-969b-6a32dc2c0aff.mock.pstmn.io/hotels/'

    const response = await fetch(url)
    if (response.ok === true) {
      const fetchedData = await response.json()
      if (response.ok) {
        setApiResponse(prevApiDetails => ({
          ...prevApiDetails,
          status: apiStatusConstants.success,
          stayData: fetchedData,
        }))
      } else {
        setApiResponse(prevApiDetails => ({
          ...prevApiDetails,
          status: apiStatusConstants.failure,
          errorMsg: fetchedData.error_msg,
        }))
      }
    }
  }

  useEffect(() => {
    getStayDetails()
  }, [])

  const renderFailureView = () => {
    const {errorMsg} = apiResponse
    return <p>{errorMsg}</p>
  }

  const renderLoadingView = () => (
    <div>
      <Loader type="ThreeDots" color="#202020" height="50" width="50" />
    </div>
  )

  const renderSuccessView = () => {
    const {stayData} = apiResponse
    const updatedData = stayData.map(eachData => ({
      name: eachData.name,
      id: eachData.id,
      rating: eachData.rating,
      price: eachData.price,
      phone: eachData.phone,
      imageUrl: eachData.image_url,
      rooms: eachData.number_of_bedrooms,
    }))
    return (
      <>
        <ul className="hotel-data-ul">
          {updatedData.map(eachData => (
            <DisplayHotelData key={eachData.id} displayHotelData={eachData} />
          ))}
        </ul>
      </>
    )
  }

  const renderStayDetails = () => {
    const {status} = apiResponse

    switch (status) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.failure:
        return renderFailureView()
      case apiStatusConstants.success:
        return renderSuccessView()

      default:
        return null
    }
  }

  const renderServicesData = () => (
    <>
      <ul className="services-main-ul">
        <div className="services-div">
          <h1 className="s-h">High Speed Internet</h1>
          <p className="s-p">
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>

        <div className="services-div">
          <h1 className="s-h">Healthy Meals</h1>
          <p className="s-p">
            A healthy breakfast and pleasant dinner will be serviced at your
            space every single day for your entire duration of stay with option
            of paid order within BriSphere.
          </p>
        </div>

        <div className="services-div">
          <h1 className="s-h">Homely Stay</h1>
          <p className="s-p">
            Designed for working professionals with spacious interiors,
            comfortable beds and sleekly attached kitchen are some of the
            comforts providedin your space.
          </p>
        </div>

        <div className="services-div">
          <h1 className="s-h">Transportation</h1>
          <p className="s-p">
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>

        <div className="services-div">
          <h1 className="s-h">Food Delivery</h1>
          <p className="s-p">
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>

        <div className="services-div">
          <h1 className="s-h">Tourism</h1>
          <p className="s-p">
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>

        <div className="services-div">
          <h1 className="s-h">Job</h1>
          <p className="s-p">
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>

        <div className="services-div">
          <h1 className="s-h">Rental Service</h1>
          <p className="s-p">
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>

        <div className="services-div">
          <h1 className="s-h">Online Shop</h1>
          <p className="s-p">
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dinning
            areas.
          </p>
        </div>
      </ul>
    </>
  )

  return (
    <>
      <div className="content-main-div">
        <h1 className="home-main-h1">
          India’s first true digital tourism ecosystem
        </h1>
        {renderStayDetails()}
        <hr className="home-hr-line" />
        <h1 className="services-h1">Services</h1>
        {renderServicesData()}
      </div>
    </>
  )
}

export default Content
