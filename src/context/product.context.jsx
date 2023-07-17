import { createContext, useState } from "react"
import PRODUCT from "../data/shopData.json"

export const ProductsContext = createContext({
  products: [],
})

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCT)
  const value = { products }

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  )
}
