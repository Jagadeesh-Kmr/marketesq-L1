import React from 'react'

const CartContext = React.createContext({
  stayList: [],
  personDetails: [],
  addPersonData: () => {},
  addStayData: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  removeStayList: () => {},
})

export default CartContext
