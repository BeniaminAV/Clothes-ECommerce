import { Routes, Route } from "react-router-dom"
import "./shop.scss"
import CategoryPreview from "../categoryPreview/categoryPreview"
import Category from "../category/category"

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop
