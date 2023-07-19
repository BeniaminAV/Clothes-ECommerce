import "./checkout.scss"
import CheckoutItem from "../../components/checkoutItem/checkoutItem"
import { useSelector } from "react-redux"
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector"

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <span className="total">Total: {cartTotal}$</span>
    </div>
  )
}

export default CheckOut
