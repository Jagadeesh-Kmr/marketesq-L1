import CartItem from '../CartItem'
import EmptyCartView from '../EmptyCartView'

import CartContext from '../../context/CartContext'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {stayList} = value
      const showEmptyCartView = stayList.length === 0

      const renderCartItemDetails = () => (
        <>
          <div className="cart-bg-container">
            <ul>
              <CartItem key={stayList.id} cartItemDetails={stayList} />
            </ul>
          </div>
        </>
      )

      return (
        <>
          {showEmptyCartView ? (
            <EmptyCartView />
          ) : (
            <div className="cart-list-main-div">{renderCartItemDetails()}</div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
