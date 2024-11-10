import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Cart from './components/Cart'
import Payment from './components/Payment'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    stayList: [],
    personDetails: [],
  }

  addCartItem = item => {
    const {stayList} = this.state
    const isItemExists = stayList.find(eachItem => eachItem.id === item.id)

    if (isItemExists) {
      this.setState(prevState => ({
        stayList: prevState.stayList.map(eachCartItem => {
          if (isItemExists.id === eachCartItem.id) {
            const updatedRooms = eachCartItem.rooms + 1

            return {...eachCartItem, rooms: updatedRooms}
          }
          return eachCartItem
        }),
      }))
    } else {
      const updatedCartList = [...stayList, item]

      this.setState({stayList: updatedCartList})
    }
  }

  increaseQuantity = id => {
    this.setState(prevState => ({
      stayList: prevState.stayList.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedRooms = eachCartItem.rooms + 1
          return {...eachCartItem, rooms: updatedRooms}
        }
        return eachCartItem
      }),
    }))
  }

  decreaseQuantity = id => {
    const {stayList} = this.state
    const hotelObject = stayList.find(eachCartItem => eachCartItem.id === id)

    if (hotelObject.rooms > 1) {
      this.setState(prevState => ({
        stayList: prevState.stayList.map(eachCartItem => {
          if (id === eachCartItem.id) {
            const updatedRooms = eachCartItem.rooms - 1
            return {...eachCartItem, rooms: updatedRooms}
          }
          return eachCartItem
        }),
      }))
    }
  }

  removeStayList = () => {
    this.setState({stayList: []})
  }

  addPersonData = data => {
    this.setState({personDetails: data})
  }

  render() {
    const {stayList, personDetails} = this.state
    return (
      <>
        <CartContext.Provider
          value={{
            stayList,
            personDetails,
            addStayData: this.addCartItem,
            addPersonData: this.addPersonData,
            increaseQuantity: this.increaseQuantity,
            decreaseQuantity: this.decreaseQuantity,
            removeStayList: this.removeStayList,
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/stayDetails" component={Cart} />
            <Route exact path="/payment" component={Payment} />
          </Switch>
        </CartContext.Provider>
      </>
    )
  }
}

export default App
/*

[
    {
      name: 'Margonda Residence 1',
      city: 'Depok',
      price: 300000,
      imageUrl:
        'https://digital.ihg.com/is/image/ihg/ihg-homepg-refresh-homepg-mktg-mod-imea-1440x720?fit=crop,1&wid=1440&hei=720',
      rating: 4,
    },
  ]

  return (
    <>
      <CartContext.Provider
        value={{
          stayList,
          addStayDetails: addStayDetail(),
          increaseQuantity: increaseQuantity(),
          decreaseQuantity: decreaseQuantity(),
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/stayDetails" component={Cart} />
        </Switch>
      </CartContext.Provider>
    </>
  )
*/
