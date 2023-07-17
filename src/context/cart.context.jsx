import { createContext, useEffect, useState } from "react"

const addToCart = (cartItems, addToProduct) => {
  const existingUser = cartItems.find(
    (cartItem) => cartItem.id === addToProduct.id
  )

  if (existingUser) {
    return cartItems.map((cartItem) =>
      cartItem.id === addToProduct.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  //Count Cart
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  //Total Cart
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

  const addItemToCart = (addToProduct) => {
    setCartItems(addToCart(cartItems, addToProduct))
  }

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear))
  }

  const value = {
    addItemToCart,
    isCartOpen,
    setIsCartOpen,
    cartCount,
    cartItems,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
