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
    const updatedData = stayData[0]

    return (
      <>
        <ul className="hotel-data-ul">
          <DisplayHotelData displayHotelData={updatedData} />
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

  return (
    <>
      <div className="content-main-div">
        {renderStayDetails()}
        <p>Discover</p>
      </div>
    </>
  )
}

export default Content
