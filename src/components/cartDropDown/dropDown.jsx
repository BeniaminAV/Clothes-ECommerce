import { useContext } from "react"
import Button from "../button/button"
import CartItem from "../cartItem/cartItem"
import "./dropDown.scss"
import { CartContext } from "../../context/cart.context"
import { useNavigate } from "react-router-dom"

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext)
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
