import { useDispatch, useSelector } from "react-redux"
import Button from "../button/button"
import "./productCard.scss"
import { addItemToCart } from "../../store/cart/cart.action"
import { selectCartItems } from "../../store/cart/cart.selector"

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const addProductToCard = () => dispatch(addItemToCart(cartItems, product))

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCard}>
        Add to card
      </Button>
    </div>
  )
}

export default ProductCard
