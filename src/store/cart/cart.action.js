import { createAction } from "../../utils/reducer/reducer"
import { CART_ACTION_TYPE } from "./cart.types"

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

  return [...cartItems, { ...addToProduct, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
}

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean)

export const addItemToCart = (cartItems, addToProduct) => {
  const newCartItems = addToCart(cartItems, addToProduct)
  return createAction(CART_ACTION_TYPE.SET_CART_ITEM, newCartItems)
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove)
  return createAction(CART_ACTION_TYPE.SET_CART_ITEM, newCartItems)
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear)
  return createAction(CART_ACTION_TYPE.SET_CART_ITEM, newCartItems)
}
