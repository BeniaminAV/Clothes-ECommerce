import { combineReducers } from "redux"
import { userReducer } from "./user/user.reducer"
import { categoriesReducer } from "./category/category.reducers"
import { cartReducer } from "./cart/cart.reducers"

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
})
