import {Route, Switch} from 'react-router-dom'
import {useState} from 'react'

import Home from './components/Home'
import StayDetails from './components/StayDetails'
import CreateContext from './context/CreateContext'

import './App.css'

const App = () => {
  const [stayList] = useState([])

  return (
    <>
      <CreateContext.Provider
        value={{
          stayList,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/stayDetails" component={StayDetails} />
        </Switch>
      </CreateContext.Provider>
    </>
  )
}

export default App