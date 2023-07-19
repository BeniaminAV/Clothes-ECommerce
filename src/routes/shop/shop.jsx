import { Routes, Route } from "react-router-dom"
import "./shop.scss"
import CategoryPreview from "../categoryPreview/categoryPreview"
import Category from "../category/category"
import { useEffect } from "react"
import { getCategoriesAndDocuments } from "../../utils/firebase"
import { useDispatch } from "react-redux"
import { setCategories } from "../../store/category/category.action"

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories")
      dispatch(setCategories(categoriesArray))
    }

    getCategoriesMap()
  }, [dispatch])

  return (
    <Routes>
      <Route index element={<CategoryPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop
