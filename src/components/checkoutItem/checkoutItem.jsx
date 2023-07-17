import "./checkout.scss"
import { useContext } from "react"
import { CartContext } from "../../context/cart.context"

export const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext)

  const clearHandler = () => clearItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  const removeItemHandler = () => removeItemFromCart(cartItem)

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearHandler}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
