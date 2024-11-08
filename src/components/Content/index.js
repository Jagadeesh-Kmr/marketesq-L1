import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  loading: 'LOADING',
  success: 'SUCCESS',
}

const Content = () => {
  const [apiResponse, SetApiResponse] = useState({
    status: apiStatusConstants.initial,
    stayData: [],
    errorMsg: '',
  })

  const getStayDetails = async () => {
    SetApiResponse({
      status: apiResponse.initial,
      stayData: null,
      errorMsg: null,
    })
    const url = 'https://jsonplaceholder.typicode.com/'

    const response = await fetch(url)
    if (response.ok === true) {
      const fetchedData = await response.json()
      console.log(fetchedData)
      if (response.ok) {
        SetApiResponse(prevApiDetails => ({
          ...prevApiDetails,
          status: apiStatusConstants.success,
          stayData: fetchedData,
        }))
      } else {
        SetApiResponse(prevApiDetails => ({
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
      <Loader type="ThreeDots" color="#202020" height="50" width="50" />{' '}
    </div>
  )

  const renderSuccessView = () => (
    <>
      <p>SuccessFully Fetched Data</p>
    </>
  )

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
        <Link to="/stayDetails">
          <button type="button" className="book-btn">
            Book
          </button>
        </Link>
        <p>Discover</p>
        {renderStayDetails()}
      </div>
    </>
  )
}

export default Content
