import Button from "../button/button"
import CartItem from "../cartItem/cartItem"
import "./dropDown.scss"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selector"

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems)
  const router = useNavigate()

  const navigateCheckout = () => {
    router("/checkout")
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={navigateCheckout}>CHECKOUT</Button>
    </div>
  )
}

export default CartDropDown
